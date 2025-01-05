package com.aschade.orderservice.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class OrderRequest {

    private String customerId;
    private ShippingAddress shippingAddress;
    private BillingAddress billingAddress;
    private PaymentMethod paymentMethod;
    private List<OrderItem> products = new ArrayList<>();
    private double subTotal;
    private double shippingCost;
    private double total;
    private String couponCode;

    private LocalDateTime createdAt = LocalDateTime.now();

    public OrderRequest() {

    }
}
