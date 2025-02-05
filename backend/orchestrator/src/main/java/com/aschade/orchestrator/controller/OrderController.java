package com.aschade.orchestrator.controller;


import com.aschade.ecommerce.entity.MainCreation;
import com.aschade.ecommerce.entity.Order;
import com.aschade.ecommerce.entity.OrderRequest;

import com.aschade.ecommerce.entity.Workflow;
import com.aschade.orchestrator.service.OrchestratorService;
import com.aschade.orchestrator.service.OrderService;
import com.aschade.orchestrator.util.mapper.OrderMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private static final Logger log = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrchestratorService orchestratorService;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private OrchestratorController orchestratorController;


    @PostMapping()
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        log.info("Order request received: {}", orderRequest);

        orderService.validateOrderRequest(orderRequest);

        Order preOrder = orderService.createPreOrder(orderRequest);
        Workflow workflow = orchestratorService.createWorkflow(preOrder);

        MainCreation mainCreation = MainCreation.builder()
                .workflow(workflow)
                .orderRequest(orderRequest)
                .build();
        orchestratorController.startWorkflow(mainCreation);

        return ResponseEntity.ok().body(workflow);
    }






}
