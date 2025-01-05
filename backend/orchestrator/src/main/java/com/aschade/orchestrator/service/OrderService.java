package com.aschade.orchestrator.service;

import com.aschade.orchestrator.entity.OrderRequest;
import com.aschade.orchestrator.entity.dto.OrderDTO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    public OrderDTO createOrderDTO(OrderRequest orderRequest) {

        return OrderDTO.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(orderRequest.getTotal())
                .totalItems(orderRequest.getProducts().stream().map(p -> p.getQuantity()).reduce(0, Integer::sum))
                .couponCode(orderRequest.getCouponCode())
                .build();
    }
}
