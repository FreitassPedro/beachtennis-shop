package com.aschade.orderservice.listener;

import com.aschade.ecommerce.entity.MainCreation;
import com.aschade.ecommerce.entity.OrderRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import com.aschade.orderservice.controller.OrderController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OrderListener {

    @Autowired
    private OrderController orderController;

    @RabbitListener(queues = "order.wait.qe")
    public void processOrder(MainCreation mainCreation) {
        OrderRequest orderRequest = mainCreation.getOrderRequest();
        String orderId = mainCreation.getWorkflow().getOrder().getId();
        log.info("OrderService processing order! {}", mainCreation.getWorkflow());

        orderController.createOrder(orderRequest, orderId);
    }

    @RabbitListener(queues = "order.stockCheck.reply.qe")
    public void handleStockCheckReply(StockCheckResult stockCheckResult) {
        log.info("OrderService received stock check reply! {}", stockCheckResult.toString());

    }

}
