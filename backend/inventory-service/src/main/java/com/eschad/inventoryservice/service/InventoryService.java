package com.eschad.inventoryservice.service;

import com.eschad.inventoryservice.entity.Inventory;
import com.eschad.inventoryservice.entity.ProductRequest;
import com.eschad.inventoryservice.entity.Validation;
import com.eschad.inventoryservice.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Validation validateProduct(ProductRequest productRequest) {
        Optional<Inventory> productInventory = inventoryRepository.findByCode(productRequest.getCode());
        if (productInventory.isEmpty()) {
            return new Validation(false, "Product not found, code: " + productRequest.getCode());
        }

        if(productInventory.get().getStock() < productRequest.getQuantity()) {
           return new Validation(false, "Not enough stock for product with code: " + productRequest.getCode());
        }

        if (productInventory.get().getUnitValue() != productRequest.getUnitValue()) {
            return new Validation(false, "Unit value does not match for product with code: " + productRequest.getCode());
        }

        return new Validation(true, "Product validated successfully");
    }
}
