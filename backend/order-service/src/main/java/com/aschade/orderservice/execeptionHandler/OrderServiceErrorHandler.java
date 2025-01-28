package com.aschade.orderservice.execeptionHandler;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;
import com.aschade.orderservice.exception.StockCheckFailedException;
import com.rabbitmq.client.Channel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.api.RabbitListenerErrorHandler;
import org.springframework.amqp.rabbit.support.ListenerExecutionFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Slf4j
@Component
public class OrderServiceErrorHandler implements RabbitListenerErrorHandler {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Override
    public Object handleError(Message amqpMessage, Channel channel, org.springframework.messaging.Message<?> message, ListenerExecutionFailedException exception) throws Exception {
        Throwable cause = exception.getCause();

        if (cause instanceof StockCheckFailedException) {
            StockCheckFailedException ex = (StockCheckFailedException) cause;
            String orderId = ex.getOrderId();

            assignFailStep(orderId, ex.getMessage());

            channel.basicNack(amqpMessage.getMessageProperties().getDeliveryTag(), false, false);
        } else {
            log.error("Error processing message: {}", message);
        }

        return null;
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
