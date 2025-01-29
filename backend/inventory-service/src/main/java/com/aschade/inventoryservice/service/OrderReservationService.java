package com.aschade.inventoryservice.service;

import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.ecommerce.entity.ProductInventory;
import com.aschade.inventoryservice.exception.InsufficientStockException;
import com.aschade.inventoryservice.repository.OrderReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class OrderReservationService {

    @Autowired
    private OrderReservationRepository orderReservationRepository;

    public List<OrderReservation> checkDisponibility(List<ProductInventory> productsInStock, OrderStockRequest orderStockRequest) {
        Map<String, ProductInventory> productInventoryMap = new HashMap<>();
        productsInStock.forEach(productInventory -> productInventoryMap.put(productInventory.getProductCode(), productInventory));

        String orderId = orderStockRequest.getOrderId();

        List<OrderReservation> orderReservations = new ArrayList<>();

        for (ProductStockRequest productStockRequest : orderStockRequest.getProductStockRequests()) {
            ProductInventory productInventory = productInventoryMap.get(productStockRequest.getProductCode());


            boolean isStockAvailable = productInventory.getStock() >= productStockRequest.getQuantity();
            if (!isStockAvailable) {
                throw new InsufficientStockException(productInventory.getProductCode(), productInventory.getStock(), productStockRequest.getQuantity());
            }
            OrderReservation orderReservation = createOrderReservation(productInventory, orderId, productStockRequest.getQuantity());
            orderReservations.add(orderReservation);
        }

        return orderReservations;
    }


    private static OrderReservation createOrderReservation(ProductInventory productInventory, String orderId, Integer quantity) {
        return OrderReservation.builder()
                .orderId(orderId)
                .productInventory(productInventory)
                .orderQuantity(quantity)
                .oldStock(productInventory.getStock())
                .newStock(productInventory.getStock() - quantity)
                .orderQuantity(quantity)
                .build();
    }


    public void saveAllOrderReservations(List<OrderReservation> orderReservations) {
        orderReservationRepository.saveAll(orderReservations);
    }
}
