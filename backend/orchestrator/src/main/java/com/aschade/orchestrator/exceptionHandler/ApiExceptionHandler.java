package com.aschade.orchestrator.exceptionHandler;

import com.aschade.orchestrator.exception.InvalidOrderRequestException;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiExceptionHandler {


    @ExceptionHandler(InvalidOrderRequestException.class)
    public ResponseEntity<ErrorMessage> invalidOrderRequestException(RuntimeException exception,
                                                                     HttpServletRequest request) {
        HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;
        return ResponseEntity.status(status)
                .body(new ErrorMessage(status.value(), System.currentTimeMillis(), exception.getMessage(), "Invalid Order", "/api/order"));
    }
}
