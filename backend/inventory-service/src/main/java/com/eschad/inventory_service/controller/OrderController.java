package com.eschad.inventory_service.controller;


import com.eschad.inventory_service.entity.OrderRequest;
import com.eschad.inventory_service.entity.ProductRequest;
import com.eschad.inventory_service.entity.Validation;
import com.eschad.inventory_service.service.ValidationService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/order")
public class OrderController {

    private static final Logger log = LoggerFactory.getLogger(OrderController.class);
    @Autowired
    private ValidationService validationService;

    @PostMapping()
    public Optional<Validation> createOrder(@RequestBody OrderRequest orderRequest) {
        Validation validation = new Validation(false, "Verifying products");
        for (ProductRequest  productRequest : orderRequest.getProductRequests()) {

            Validation productValidation = validationService.validateProduct(productRequest);
            if (!productValidation.isValid()) {
                return Optional.of(productValidation);
            }
        }

        // If no validation errors, create order
        validation.setValid(true);
        validation.setMessage("Stock items validated successfully");
        validation.setUpdatedAt(LocalDateTime.now());

        log.info("Order: " + validation.toString());
        return Optional.of(validation);
    }

    @GetMapping("/example")
    public OrderRequest showExample() {
        OrderRequest orderRequest = new OrderRequest();
        ProductRequest productRequest = new ProductRequest();
        productRequest.setCode("123");
        productRequest.setQuantity(2);
        productRequest.setUnitValue(10.0);

        ProductRequest productRequest2 = new ProductRequest();
        productRequest2.setCode("456");
        productRequest2.setQuantity(1);
        productRequest2.setUnitValue(20.0);

        orderRequest.getProductRequests().add(productRequest);
        orderRequest.getProductRequests().add(productRequest2);

        return orderRequest;
    }

}
