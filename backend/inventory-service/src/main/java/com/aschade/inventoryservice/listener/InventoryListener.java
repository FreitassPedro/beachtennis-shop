package com.aschade.inventoryservice.listener;

import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductInventory;
import com.aschade.ecommerce.entity.result.StockCheckResult;

import com.aschade.inventoryservice.exception.InsufficientStockException;
import com.aschade.inventoryservice.service.InventoryService;
import com.aschade.inventoryservice.service.OrderReservationService;
import com.aschade.inventoryservice.service.ProductInventoryService;
import lombok.extern.slf4j.Slf4j;
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


        try {
            List<ProductInventory> productsInStock = productInventoryService.findProductInventoriesByProductCodes(orderStockRequest.getProductStockRequests());

            List<OrderReservation> orderReservations = orderReservationService.checkDisponibility(productsInStock, orderStockRequest);
            orderReservationService.saveAllOrderReservations(orderReservations);
        } catch (InsufficientStockException e) {
            log.error("Stock check failed for order: {}", orderStockRequest.getOrderId());
            return new StockCheckResult(false, e.getMessage());
        }


        return new StockCheckResult(true, "Stock available");
    }

}


