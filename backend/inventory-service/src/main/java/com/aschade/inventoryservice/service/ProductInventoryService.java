package com.aschade.inventoryservice.service;

import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.ProductInventory;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import com.aschade.inventoryservice.exception.InsufficientStockException;
import com.aschade.inventoryservice.exception.ProductNotFoundException;
import com.aschade.inventoryservice.repository.ProductInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductInventoryService {

    @Autowired
    private ProductInventoryRepository productInventoryRepository;

    public List<ProductInventory> findProductInventoriesByProductCodes(List<ProductStockRequest> productStockRequests) throws InsufficientStockException, ProductNotFoundException {
        List<ProductInventory> productInventories = new ArrayList<>();
        for (ProductStockRequest productStockRequest : productStockRequests) {
            String productCode = productStockRequest.getProductCode();

                ProductInventory productInventory = productInventoryRepository.findByProductCode(productCode)
                        .orElseThrow(() -> new ProductNotFoundException(productCode));

                if (productInventory.getStock() < productStockRequest.getQuantity()) {
                    throw new InsufficientStockException(productCode, productStockRequest.getQuantity(), productInventory.getStock());
                }
                productInventories.add(productInventory);

        }
        return productInventories;
    }
}

