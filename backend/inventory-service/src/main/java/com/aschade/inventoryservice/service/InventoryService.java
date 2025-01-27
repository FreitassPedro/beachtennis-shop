package com.aschade.inventoryservice.service;

import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.inventoryservice.repository.ProductInventoryRepository;
import com.aschade.ecommerce.entity.ProductInventory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private ProductInventoryRepository inventoryRepository;

    @Autowired
    private OrderReservationService orderReservationService;

    public List<OrderReservation> createOrderInventories(List<ProductInventory> productInventoryList, OrderStockRequest orderStockRequest) {
        List<OrderReservation> orderReservationList = new ArrayList<>();
        for (ProductInventory productInventory : productInventoryList) {

            for (ProductStockRequest productStockRequest : orderStockRequest.getProductStockRequests()) {
                if (productInventory.getProductCode() != productStockRequest.getProductCode()) continue;

                    LocalDateTime now = LocalDateTime.now();
                OrderReservation orderReservation = OrderReservation.builder()
                        .orderId(orderStockRequest.getOrderId())
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



    public void saveAllOrderInventory(List<ProductInventory> productInventories) {
        inventoryRepository.saveAll(productInventories);
    }


}
