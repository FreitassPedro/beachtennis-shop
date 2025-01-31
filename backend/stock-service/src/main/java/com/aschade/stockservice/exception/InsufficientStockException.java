package com.aschade.stockservice.exception;

public class InsufficientStockException extends RuntimeException {
    public InsufficientStockException(String productCode, int quantity, int stock) {
        super("Insufficient stock for product with code: " + productCode + ". Requested: " + quantity + ". Available: " + stock);
    }
}
