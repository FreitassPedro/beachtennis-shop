package com.aschade.stockservice.service;

import com.aschade.ecommerce.entity.*;
import com.aschade.stockservice.exception.InsufficientStockException;
import com.aschade.stockservice.repository.OrderReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class OrderReservationService {

    @Autowired
    private OrderReservationRepository orderReservationRepository;

    public List<OrderReservation> checkDisponibility(List<ProductStock> productsInStock, OrderStockRequest orderStockRequest) {
        Map<String, ProductStock> productInventoryMap = new HashMap<>();
        productsInStock.forEach(productInventory -> productInventoryMap.put(productInventory.getProductCode(), productInventory));

        String orderId = orderStockRequest.getOrderId();

        List<OrderReservation> orderReservations = new ArrayList<>();

        for (ProductStockRequest productStockRequest : orderStockRequest.getProductStockRequests()) {
            ProductStock productStock = productInventoryMap.get(productStockRequest.getProductCode());


            boolean isStockAvailable = productStock.getStock() >= productStockRequest.getQuantity();
            if (!isStockAvailable) {
                throw new InsufficientStockException(productStock.getProductCode(), productStock.getStock(), productStockRequest.getQuantity());
            }
            OrderReservation orderReservation = createOrderReservation(productStock, orderId, productStockRequest.getQuantity());
            orderReservations.add(orderReservation);
        }

        return orderReservations;
    }


    private static OrderReservation createOrderReservation(ProductStock productStock, String orderId, Integer quantity) {
        return OrderReservation.builder()
                .orderId(orderId)
                .productStock(productStock)
                .orderQuantity(quantity)
                .oldStock(productStock.getStock())
                .newStock(productStock.getStock() - quantity)
                .orderQuantity(quantity)
                .updatedAt(LocalDateTime.now())
                .build();
    }


    public void saveAllOrderReservations(List<OrderReservation> orderReservations) {
        orderReservationRepository.saveAll(orderReservations);
    }

}
