package com.aechad.orchestrator.entity;

import java.util.UUID;

public class Product {

    private UUID code = UUID.randomUUID();

    private String name;
    private String description;
    private double price;
    private int stock;

    private String imageUrl;

}
