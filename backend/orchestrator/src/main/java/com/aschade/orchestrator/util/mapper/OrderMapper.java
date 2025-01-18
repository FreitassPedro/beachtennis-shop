package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.dto.OrderDTO;
import com.aschad.ecommerce.entity.Order;
import com.aschad.ecommerce.entity.OrderItem;
import com.aschad.ecommerce.entity.OrderRequest;
import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.Product;
import com.aschade.orchestrator.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Component
public class OrderMapper {


    private static final Random random = new Random();

    @Autowired
    private ProductMapper productMapper;

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

    /*

    public Order toOrder(OrderRequest orderRequest) {
        List<Product> products = orderRequest.getProducts().stream()
                .map(productMapper::toProductByCode)
                .toList();
        List<OrderItem> orderItems = products.stream()

        return Order.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(orderRequest.getProducts().stream()
                        .map(productDTO -> BigDecimal.valueOf(productDTO.getUnitPrice() * productDTO.getQuantity()))
                        .reduce(BigDecimal.ZERO, BigDecimal::add))
                .totalItems(orderRequest.getProducts().stream().map(ProductDTO::getQuantity).reduce(0, Integer::sum))
                .couponCode(orderRequest.getCouponCode())
                .build();
    }

     */



}
