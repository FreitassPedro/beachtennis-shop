package com.aschade.orderservice.service;

import com.aschade.orderservice.entity.Order;
import com.aschade.orderservice.entity.OrderRequest;
import com.aschade.orderservice.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class OrderService {

    private static final Logger log = LoggerFactory.getLogger(OrderService.class);
    @Autowired
    private OrderRepository orderRepository;

    public void enqueueOrder(Order order) {

    }

    public Order createOrder(OrderRequest orderRequest) {
        Order order = Order.builder()
                .products(orderRequest.getProducts())
                .createdAt(LocalDateTime.now())
                .orderTrackingNumber(UUID.randomUUID().toString())
                .customerId(orderRequest.getCustomerId())
                .build();

        orderRepository.save(order);
        log.info("Order created: {}", order);
        return order;
    }
}
