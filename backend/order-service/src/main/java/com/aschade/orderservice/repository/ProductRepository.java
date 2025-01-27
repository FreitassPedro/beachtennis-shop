package com.aschade.orderservice.repository;

import com.aschade.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findByCode(String code);
}
