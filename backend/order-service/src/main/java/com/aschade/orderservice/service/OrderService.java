package com.aschade.orderservice.service;

import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.Order;
import com.aschad.ecommerce.entity.OrderRequest;
import com.aschad.ecommerce.enums.OrderStatus;
import com.aschade.orderservice.repository.OrderRepository;
import com.aschade.orderservice.exception.SagaFlowException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {


    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private InventoryService inventoryService;


    public String generateOrderTrackingNumber() {
        return null;

    }

    public Order createOrder(OrderRequest orderRequest, Order order) {
        orderRepository.findById(order.getId()).orElseThrow(() -> new SagaFlowException("Order not found"));

        int totalItems = orderRequest.getProducts().stream().mapToInt(ProductDTO::getQuantity).sum();


        order.setTotalItems(totalItems);
        order.setStatus(OrderStatus.CREATED);
        return order;
    }

}
