package com.aechad.orchestrator.entity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.math.BigDecimal;


public class OrderItem {

    private Long id;
    private int quantity;
    private BigDecimal unitPrice;
    private Product product;
    private Order order;
}
