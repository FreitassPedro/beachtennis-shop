package com.aschade.orderservice.exception;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;

import java.time.LocalDateTime;


public class SagaFlowException extends RuntimeException{

    private StepDTO stepDto;

    public SagaFlowException(String message) {
        super(message);
        this.stepDto = StepDTO.builder()
                .message(message)
                .source(StepSource.ORDER_SERVICE)
                .timestamp(LocalDateTime.now())
                .status(StepStatus.FAILED)
                .build();
    }

    public StepDTO getStepDto() {
        return stepDto;
    }
}
