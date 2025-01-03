package com.aschad.inventoryservice.entity;

import lombok.Data;

@Data
public class ProductRequest {
    private String code;
    private int quantity;
    private double unitValue;
}
