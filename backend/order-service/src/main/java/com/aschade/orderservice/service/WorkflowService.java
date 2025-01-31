package com.aschade.orderservice.service;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class WorkflowService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

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

    public void sendStepResult(StepDTO stepDTO) {
        switch (stepDTO.getStatus()) {
            case FAILED:
                rabbitTemplate.convertAndSend( "order.exchange", "step.fail", stepDTO);
                break;
            case SUCCESS:
                rabbitTemplate.convertAndSend( "order.exchange", "order.success", stepDTO);
                break;
        }


    }

    public void assignSuccessStep(String orderId) {
        StepDTO stepDTO = StepDTO.builder()
                .workflowId(orderId)
                .message("Order created successfully")
                .source(StepSource.ORDER_SERVICE)
                .status(StepStatus.SUCCESS)
                .timestamp(LocalDateTime.now())
                .build();

        sendStepResult(stepDTO);
    }
}
