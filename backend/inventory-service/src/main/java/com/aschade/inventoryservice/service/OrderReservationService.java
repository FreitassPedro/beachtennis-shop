package com.aschade.inventoryservice.service;

import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.ecommerce.entity.ProductInventory;
import com.aschade.inventoryservice.repository.OrderReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderReservationService {

    @Autowired
    private OrderReservationRepository OrderReservationRepository;

    public List<OrderReservation> createOrderReervation(List<ProductInventory> productInventories, OrderStockRequest orderStockRequest) {
        List<OrderReservation> orderReservationList = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();
        String orderId = orderStockRequest.getOrderId();
        for (ProductInventory productInventory : productInventories) {
            for (ProductStockRequest productStockRequest : orderStockRequest.getProductStockRequests()) {
                if (productInventory.getProductCode() != productStockRequest.getProductCode()) continue;

                OrderReservation orderReservation = OrderReservation.builder()
                        .orderId(orderId)
                        .productInventory(productInventory)
                        .orderQuantity(productStockRequest.getQuantity())
                        .oldStock(productInventory.getStock())
                        .newStock(productInventory.getStock() - productStockRequest.getQuantity())
                        .orderQuantity(productStockRequest.getQuantity())
                        .createdAt(now)
                        .updatedAt(now)
                        .build();
                orderReservationList.add(orderReservation);
            }
        }

        return orderReservationList;
    }
}
