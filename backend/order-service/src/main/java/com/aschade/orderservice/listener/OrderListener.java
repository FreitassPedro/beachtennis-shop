package com.aschade.orderservice.listener;

import com.aschade.ecommerce.entity.MainCreation;
import com.aschade.ecommerce.entity.Order;
import com.aschade.ecommerce.entity.OrderRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import com.aschade.orderservice.controller.OrderController;
import com.aschade.orderservice.exception.StockCheckFailedException;
import com.aschade.orderservice.service.WorkflowService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OrderListener {

    @Autowired
    private OrderController orderController;

    @Autowired
    private WorkflowService workflowService;

    @RabbitListener(queues = "order.wait.qe", errorHandler = "orderServiceErrorHandler")
    public void processOrder(MainCreation mainCreation) {
        OrderRequest orderRequest = mainCreation.getOrderRequest();
        String orderId = mainCreation.getWorkflow().getOrder().getId();
        log.info("OrderService processing order! {}", mainCreation.getWorkflow());


        Order order = orderController.createOrder(orderRequest, orderId);

        orderController.saveOrder(order);

        workflowService.assignSuccessStep(order.getId());


        /*
        try {

            orderController.createOrder(orderRequest, orderId);
        } catch (Exception e) {
            log.error("Stock check failed for order: {} \nError: {} \nCause: {}", orderId, e.getMessage(), e.getCause());
            throw e;
        }

         */
    }


    @RabbitListener(queues = "order.stockCheck.reply.qe")
    public void handleStockCheckReply(StockCheckResult stockCheckResult) {
        log.info("OrderService received stock check reply! {}", stockCheckResult.toString());
    }

    @RabbitListener(queues = "order.dlq.qe")
    public void handleDlq(Object object) {
        log.error("OrderService received message from DLQ: {}", object);
    }

}
