package com.aschade.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderController {


    @GetMapping
    public ResponseEntity<?> getOrders() {
        return ResponseEntity.ok().build();
    }
}
