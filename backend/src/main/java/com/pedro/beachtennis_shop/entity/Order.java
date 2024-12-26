package com.pedro.beachtennis_shop.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders") // 'Order' is a reserved word in SQL
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private List<OrderItem> orderItems;
    private  String orderTrackingNumber;
    private double totalPrice;
    private String status;
    private int totalItems;

    private LocalDateTime createdAt;




}
