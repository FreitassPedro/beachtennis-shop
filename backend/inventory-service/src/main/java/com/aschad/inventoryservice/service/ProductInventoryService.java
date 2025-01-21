package com.aschad.inventoryservice.service;

import com.aschad.ecommerce.entity.ProductStockRequest;
import com.aschad.inventoryservice.entity.ProductInventory;
import com.aschad.inventoryservice.repository.ProductInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductInventoryService {

    @Autowired
    private ProductInventoryRepository productInventoryRepository;

    public List<ProductInventory> findProductInventoriesByProductCodes(List<ProductStockRequest> productStockRequests) {
        List<ProductInventory> productInventories = new ArrayList<>();
        for (ProductStockRequest productStockRequest : productStockRequests) {
            String productCode = productStockRequest.getProductCode();
            ProductInventory productInventory = productInventoryRepository.findByProductCode(productCode).orElse(null);

            if (productInventory == null) {
                throw new RuntimeException("Product not found, code: {} " + productCode);
            }

            if (productInventory.getStock() < productStockRequest.getQuantity()) {
                throw new RuntimeException("Not enough stock for product with code: {}" + productCode);
            }

            productInventories.add(productInventory);
        }

        return productInventories;
    }
}

