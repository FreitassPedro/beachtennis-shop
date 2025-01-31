package com.aschade.stockservice.exception;

import com.aschade.ecommerce.entity.result.StockCheckResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalErrorHandler {


    @ExceptionHandler(InsufficientStockException.class)
    public StockCheckResult handleInsufficientStockException(InsufficientStockException e) {
        return new StockCheckResult(false, e.getMessage());
    }
}
