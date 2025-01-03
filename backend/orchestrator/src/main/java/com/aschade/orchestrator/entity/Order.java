package com.aschade.orchestrator.entity;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
public class Order {

    private Long id;
    private List<OrderItem> products = new ArrayList<>();
    private String orderTrackingNumber;
    private double totalPrice;
    private int totalItems;
    private LocalDateTime createdAt = LocalDateTime.now();

        public void addProduct(OrderItem product) {
        if (products == null) {
            products = new ArrayList<>();
        }
        products.add(product);
    }



}
