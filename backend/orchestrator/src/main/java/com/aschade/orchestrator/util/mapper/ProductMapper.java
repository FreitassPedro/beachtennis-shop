package com.aschade.orchestrator.util.mapper;

import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.entity.Product;
import com.aschade.orchestrator.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    @Autowired
    private ProductService productService;

    public Product toProductByCode(ProductDTO productDTO) {
        return productService.findByCode(productDTO.getCode());
    }

    public ProductDTO toDto(Product product) {
        return ProductDTO.builder()
                .code(product.getCode())
                .unitPrice(product.getPrice())
                .build();
    }
}
