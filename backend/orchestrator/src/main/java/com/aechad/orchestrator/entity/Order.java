package com.aechad.orchestrator.entity;

import jakarta.persistence.PrePersist;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
public class Order {

    private Long id;
    private List<OrderItem> products;
    private String orderTrackingNumber;
    private double totalPrice;
    private int totalItems;
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        products = new ArrayList<>();
    }

    public void addProduct(OrderItem product) {
        if (products == null) {
            products = new ArrayList<>();
        }
        products.add(product);
    }



}
