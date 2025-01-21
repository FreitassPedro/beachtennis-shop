package com.aschad.inventoryservice.service;

import com.aschad.ecommerce.entity.OrderStockRequest;
import com.aschad.ecommerce.entity.ProductStockRequest;
import com.aschad.inventoryservice.entity.OrderInventory;
import com.aschad.inventoryservice.entity.ProductInventory;
import com.aschad.inventoryservice.repository.OrderInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderInventoryService {

    @Autowired
    private OrderInventoryRepository orderInventoryRepository;

    public List<OrderInventory> createOrderInventories(List<ProductInventory> productInventories, OrderStockRequest orderStockRequest) {
        List<OrderInventory> orderInventoryList = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();
        String orderId = orderStockRequest.getOrderId();
        for (ProductInventory productInventory : productInventories) {
            for (ProductStockRequest productStockRequest : orderStockRequest.getProductStockRequests()) {
                if (productInventory.getProductCode() != productStockRequest.getProductCode()) continue;

                OrderInventory orderInventory = OrderInventory.builder()
                        .orderId(orderId)
                        .productInventory(productInventory)
                        .orderQuantity(productStockRequest.getQuantity())
                        .oldStock(productInventory.getStock())
                        .newStock(productInventory.getStock() - productStockRequest.getQuantity())
                        .orderQuantity(productStockRequest.getQuantity())
                        .createdAt(now)
                        .updatedAt(now)
                        .build();
                orderInventoryList.add(orderInventory);
            }
        }

        return orderInventoryList;
    }
}
