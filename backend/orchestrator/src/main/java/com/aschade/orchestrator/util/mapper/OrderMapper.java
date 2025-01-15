package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderDTO toOrderDTO(OrderRequest orderRequest) {
        return OrderDTO.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(orderRequest.getTotalValue())
                .totalItems(orderRequest.getProducts().stream().map(p -> p.getQuantity()).reduce(0, Integer::sum))
                .couponCode(orderRequest.getCouponCode())
                .build();
    }

}
