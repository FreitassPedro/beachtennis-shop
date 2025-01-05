package com.aschade.orderservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    private Long id;
    private String code;

    private String name;
    private String description;
    private double price;

    private String imageUrl;

}
