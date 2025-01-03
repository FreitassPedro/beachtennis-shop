package com.aschade.orderservice.entity;

import java.math.BigDecimal;


public class OrderItem {

    private Long id;
    private int quantity;
    private BigDecimal unitPrice;
    private Product product;
    private Order order;
}
