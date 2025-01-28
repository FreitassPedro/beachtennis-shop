package com.aschade.orderservice.execeptionHandler;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;
import com.aschade.orderservice.exception.SagaFlowException;
import com.aschade.orderservice.exception.StockCheckFailedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @ExceptionHandler(SagaFlowException.class)
    public void handlerSagaFlowException(SagaFlowException ex) {
        rabbitTemplate.convertAndSend("orchestrator.exchange", "step.fail", ex.getStepDto());
        log.error("Exception caught: {}", ex.getMessage());
    }


    @ExceptionHandler({StockCheckFailedException.class})
    public void handleStockCheckFailedException(StockCheckFailedException ex, Message message) throws Exception {
        String orderId = ex.getOrderId();

        assignFailStep(orderId, ex.getMessage());
        sendToDQL(message);
    }

    private void sendToDQL(Message message) {
        rabbitTemplate.convertAndSend("order.exchange.dlq", "order.fail", message);
    }

    public void assignFailStep(String orderId, String message) {
        StepDTO stepDTO = StepDTO.builder()
                .workflowId(orderId)
                .message(message)
                .source(StepSource.ORDER_SERVICE)
                .status(StepStatus.FAILED)
                .timestamp(LocalDateTime.now())
                .build();

        sendStepResult(stepDTO);
    }

    private void sendStepResult(StepDTO stepDTO) {
            rabbitTemplate.convertAndSend("orchestrator.exchange", "step.fail", stepDTO);
    }

}
