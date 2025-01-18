package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.Product;
import com.aschade.orchestrator.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    @Autowired
    private ProductService productService;

    public Product toProductByCode(ProductDTO productDTO) {
        return productService.getByCode(productDTO.getProductCode());
    }
}
