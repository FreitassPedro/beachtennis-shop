package com.aschade.orchestrator.repository;

import com.aschad.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByCode(String productCode);
}
