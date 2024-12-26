package com.eschad.order_service.entity;

import jakarta.persistence.*;

import java.util.UUID;


public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;
    private String description;
    private double price;
    private int stock;

    private String imageUrl;

}
