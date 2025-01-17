package com.aschade.orderservice.listener;

import com.aschad.ecommerce.Workflow;
import com.aschade.orderservice.controller.OrderController;
import com.aschade.orderservice.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class OrderListener {

    private OrderController orderController;

    @RabbitListener(queues = "order.wait.qe")
    public void processOrder(Workflow workflow) {
        log.info("{} OrderService processing order!", workflow.getId());


    }

}
