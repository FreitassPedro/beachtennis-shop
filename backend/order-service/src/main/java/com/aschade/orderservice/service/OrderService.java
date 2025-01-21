package com.aschade.orderservice.service;

import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.Order;
import com.aschad.ecommerce.entity.OrderRequest;
import com.aschad.ecommerce.enums.OrderStatus;
import com.aschade.orderservice.exception.SagaFlowException;
import com.aschade.orderservice.repository.OrderRepository;
import com.aschade.orderservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private InventoryService inventoryService;


    public String generateOrderTrackingNumber() {
        return null;

    }

    public Order findOrderById(String orderId) {
        return orderRepository.findById(orderId).orElseThrow(() -> new SagaFlowException("Order not found"));
    }

    public Order createOrder(OrderRequest orderRequest, Order order) {



        int totalItems = orderRequest.getProducts().stream().mapToInt(ProductDTO::getQuantity).sum();

        order.setTotalItems(totalItems);
        order.setStatus(OrderStatus.CREATED);
        return order;
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
