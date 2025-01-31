package com.aschade.orderservice.controller;

import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.entity.Order;
import com.aschade.ecommerce.entity.OrderItem;
import com.aschade.ecommerce.entity.OrderRequest;
import com.aschade.ecommerce.entity.Product;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import com.aschade.ecommerce.enums.OrderStatus;
import com.aschade.orderservice.exception.StockCheckFailedException;
import com.aschade.orderservice.service.StockService;
import com.aschade.orderservice.service.OrderService;
import com.aschade.orderservice.service.WorkflowService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@RequestMapping("/api/order")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private StockService stockService;

    @Autowired
    private WorkflowService workflowService;

    public Order createOrder(OrderRequest orderRequest, String orderId) {
        checkStock(orderRequest, orderId);

        Order order = orderService.createOrder(orderRequest, orderId);

        orderService.saveOrder(order);

        return order;
    }


    private void checkStock(OrderRequest orderRequest, String orderId) {
        StockCheckResult stockCheckResult = stockService.checkStockAvailability(orderRequest.getProducts(), orderId);
        if (stockCheckResult == null || !stockCheckResult.isSuccess()) {
            throw new StockCheckFailedException("Stock check failed for order: ", orderId);
        }
    }


    public void saveOrder(Order order) {
        orderService.saveOrder(order);
    }
}
