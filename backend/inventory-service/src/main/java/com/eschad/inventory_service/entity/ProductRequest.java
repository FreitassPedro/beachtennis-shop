package com.eschad.inventory_service.entity;

import lombok.Data;

import java.util.UUID;

@Data
public class ProductRequest {
    private String code;
    private int quantity;
    private double unitValue;
}
