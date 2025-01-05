package com.aschade.orderservice.controller;

import com.aschade.orderservice.entity.Order;
import com.aschade.orderservice.entity.OrderRequest;

import com.aschade.orderservice.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api/order")
@RestController
public class OrderController {

    private static final Logger log = LoggerFactory.getLogger(OrderController.class);

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping()
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        log.info("Order request received: {}", orderRequest);
        Order order = orderService.createOrder(orderRequest);
        orderService.enqueueOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
