package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;
import org.springframework.stereotype.Component;

import java.util.Random;
import java.util.UUID;

@Component
public class OrderMapper {

    private static final Random random = new Random();

    public OrderDTO toOrderDTO(OrderRequest orderRequest) {
        return OrderDTO.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(orderRequest.getProducts().stream().map(productDTO -> productDTO.getUnitPrice() * productDTO.getQuantity()).reduce(0.0, Double::sum))
                .totalItems(orderRequest.getProducts().stream().map(p -> p.getQuantity()).reduce(0, Integer::sum))
                .couponCode(orderRequest.getCouponCode())
                .orderId(
                        String.format(
                                "%s-%05d",

                                orderRequest.getCustomer().getId().toString(),
                                random.nextInt(10000, 99999)
                        )
                )
                .build();
    }

}
