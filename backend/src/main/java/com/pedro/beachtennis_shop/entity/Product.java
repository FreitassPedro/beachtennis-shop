package com.pedro.beachtennis_shop.entity;

import jakarta.persistence.*;

@Entity
@Table
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double unitValue;
    private int stock;

    private String imageUrl;

}
