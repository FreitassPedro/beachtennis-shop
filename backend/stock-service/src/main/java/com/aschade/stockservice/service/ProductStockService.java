package com.aschade.stockservice.service;

import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.ProductStock;
import com.aschade.stockservice.exception.ProductNotFoundException;
import com.aschade.stockservice.repository.ProductStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductStockService {

    @Autowired
    private ProductStockRepository productStockRepository;

    public List<ProductStock> findProductInventoriesByProductCodes(List<ProductStockRequest> productStockRequests) {
        List<ProductStock> productInventories = new ArrayList<>();
        for (ProductStockRequest productStockRequest : productStockRequests) {
            String productCode = productStockRequest.getProductCode();

            ProductStock productStock = productStockRepository.findByProductCode(productCode)
                    .orElseThrow(() -> new ProductNotFoundException(productCode));

            productInventories.add(productStock);
        }
        return productInventories;
    }
}

