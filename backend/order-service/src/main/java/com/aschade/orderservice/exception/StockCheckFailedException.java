package com.aschade.orderservice.exception;

public class StockCheckFailedException extends RuntimeException{
    private String orderId;

    public StockCheckFailedException(String message, String orderId) {
        super(message);
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }
}
