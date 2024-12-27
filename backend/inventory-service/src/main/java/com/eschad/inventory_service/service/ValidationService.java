package com.eschad.inventory_service.service;

import com.eschad.inventory_service.entity.ProductRequest;
import com.eschad.inventory_service.entity.Validation;
import com.eschad.inventory_service.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Validation validateProduct(ProductRequest productRequest) {
        if(!inventoryRepository.existsByProductCode(productRequest.getCode())) {
            return new Validation(false, "Product not found, code: " + productRequest.getCode());
        }

        if (!inventoryRepository.hasEnoughStock(productRequest.getCode(), productRequest.getQuantity())) {
            return new Validation(false, "Not enough stock for product with code: " + productRequest.getCode());
        }

        return new Validation(true, "Product validated successfully");
    }
}
