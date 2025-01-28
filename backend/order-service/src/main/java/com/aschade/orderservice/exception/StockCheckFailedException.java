package com.aschade.orderservice.exception;

public class StockCheckFailedException extends OrderException{

    private String orderId;
    public StockCheckFailedException(String message, String orderId) {
        super(message + orderId);
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }
}
