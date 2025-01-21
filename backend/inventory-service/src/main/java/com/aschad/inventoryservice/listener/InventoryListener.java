package com.aschad.inventoryservice.listener;

import com.aschad.ecommerce.entity.OrderStockRequest;
import com.aschad.inventoryservice.entity.ProductInventory;
import com.aschad.inventoryservice.service.InventoryService;
import com.aschad.inventoryservice.service.OrderInventoryService;
import com.aschad.inventoryservice.service.ProductInventoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class InventoryListener {

    @Autowired
    private ProductInventoryService productInventoryService;
    @Autowired
    private OrderInventoryService orderInventoryService;
    @Autowired
    private InventoryService inventoryService;

    @RabbitListener(queues = "inventory.checkStock.qe")
    public void checkStockAvailability(OrderStockRequest orderStockRequest) {
        log.info("Checking stock availability for order: {}", orderStockRequest.getOrderId());

        List<ProductInventory> productInventories = productInventoryService.findProductInventoriesByProductCodes(orderStockRequest.getProductStockRequests());

        orderInventoryService.createOrderInventories(productInventories, orderStockRequest);

        inventoryService.saveAllOrderInventory(productInventories);

    }
}
