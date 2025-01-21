package com.aschade.orchestrator.service;

import com.aschad.ecommerce.entity.Product;
import com.aschade.orchestrator.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public Product getByCode(String productCode) {
        return productRepository.findByCode(productCode);
    }
}
