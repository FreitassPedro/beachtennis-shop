package com.aschade.orderservice.controller;

import com.aschade.ecommerce.entity.Order;
import com.aschade.ecommerce.entity.OrderRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import com.aschade.orderservice.exception.StockCheckFailedException;
import com.aschade.orderservice.service.InventoryService;
import com.aschade.orderservice.service.OrderService;
import com.aschade.orderservice.service.WorkflowService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RequestMapping("/api/order")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private WorkflowService workflowService;

    public void createOrder(OrderRequest orderRequest, String orderId) {
        checkStock(orderRequest, orderId);

        Order order = orderService.findOrder(orderId);
    }

    private void checkStock(OrderRequest orderRequest, String orderId) {
        StockCheckResult stockCheckResult = inventoryService.checkStockAvailability(orderRequest.getProducts(), orderId);
        if (stockCheckResult == null || !stockCheckResult.isSuccess()) {
            throw new StockCheckFailedException("Stock check failed for order: " + orderId, orderId);
        }
    }


}
