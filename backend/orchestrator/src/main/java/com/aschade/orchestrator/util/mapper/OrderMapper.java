package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;
import com.aschad.ecommerce.ProductDTO;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Random;
import java.util.UUID;

@Component
public class OrderMapper {

    private static final Random random = new Random();

    public OrderDTO toOrderDTO(OrderRequest orderRequest) {
        BigDecimal totalAmount = orderRequest.getProducts().stream()
                .map(productDTO -> BigDecimal.valueOf
                        (productDTO.getUnitPrice() * productDTO.getQuantity()))
                .reduce(BigDecimal.ZERO, BigDecimal::add);


        return OrderDTO.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(totalAmount)
                .totalItems(orderRequest.getProducts().stream().map(ProductDTO::getQuantity).reduce(0, Integer::sum))
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
