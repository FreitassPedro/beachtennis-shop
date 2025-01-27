package com.aschade.inventoryservice.listener;

import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;

import com.aschade.inventoryservice.service.InventoryService;
import com.aschade.inventoryservice.service.OrderReservationService;
import com.aschade.inventoryservice.service.ProductInventoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class InventoryListener {

    @Autowired
    private ProductInventoryService productInventoryService;
    @Autowired
    private OrderReservationService orderReservationService;
    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RabbitListener(queues = "inventory.checkStock.qe")
    public StockCheckResult checkStockAvailability(OrderStockRequest orderStockRequest) {
        log.info("Checking stock availability for order: {}", orderStockRequest.toString());
        return new StockCheckResult(true, "All products are available");
          /*  List<ProductInventory> productInventories = productInventoryService.findProductInventoriesByProductCodes(orderStockRequest.getProductStockRequests());

            orderReservationService.createOrderReervation(productInventories, orderStockRequest);
            inventoryService.saveAllOrderInventory(productInventories);

            stockCheckResult.setSuccess(true);
            stockCheckResult.setMessage("Stock available");

            return orderStockRequest;

           */
    }
}


