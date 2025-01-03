package com.aschad.inventoryservice.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class Validation {

    private boolean valid;
    private String message;

    private LocalDateTime createdA = LocalDateTime.now();
    private LocalDateTime updatedAt;

    private List<String> orderId = new ArrayList<>();
    private String transactionId;

    public Validation(boolean valid, String message) {
        this.valid = valid;
        this.message = message;
    }

    public void addOrderId(String orderId) {
        if (this.orderId == null) this.orderId = new ArrayList<>();
        this.orderId.add(orderId);
    }


}
