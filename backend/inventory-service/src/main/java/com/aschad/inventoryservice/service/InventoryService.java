package com.aschad.inventoryservice.service;

import com.aschad.inventoryservice.entity.ProductRequest;
import com.aschad.inventoryservice.repository.InventoryRepository;
import com.aschad.inventoryservice.entity.Inventory;
import com.aschad.inventoryservice.entity.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Validation validateProduct(ProductRequest productRequest) {
        Optional<Inventory> productInventory = inventoryRepository.findByProductCode(productRequest.getCode());
        if (productInventory.isEmpty()) {
            return new Validation(false, "Product not found, code: " + productRequest.getCode());
        }

        if(productInventory.get().getStock() < productRequest.getQuantity()) {
           return new Validation(false, "Not enough stock for product with code: " + productRequest.getCode());
        }

        // Resolver erro de comparar BigDecimal com Double
      /* if (productInventory.get().getUnitValue().compareTo() {
            return new Validation(false, "Unit value does not match for product with code: " + productRequest.getCode());
        }

       */

        return new Validation(true, "Product validated successfully");
    }
}
