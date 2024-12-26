package com.eschad.inventory_service.entity;

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
    private String status;
    private int totalItems;

    private LocalDateTime createdAt;

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
