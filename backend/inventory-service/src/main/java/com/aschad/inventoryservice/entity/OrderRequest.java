package com.aschad.inventoryservice.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class OrderRequest {
    List<ProductRequest> productRequests = new ArrayList<>();

    public void addProductRequest(ProductRequest productRequest) {
        if (productRequests == null)  productRequests = new ArrayList<>();

        productRequests.add(productRequest);
    }
 }
