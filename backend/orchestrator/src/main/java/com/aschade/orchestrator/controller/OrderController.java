package com.aschade.orchestrator.controller;


import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;

import com.aschad.ecommerce.ValidationResult;
import com.aschade.orchestrator.entity.Workflow;
import com.aschade.orchestrator.service.OrchestratorService;
import com.aschade.orchestrator.service.OrderService;
import com.aschade.orchestrator.util.mapper.OrderMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


    @PostMapping()
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        log.info("Order request received: {}", orderRequest);
        ValidationResult validationResult = orderService.validateOrderRequest(orderRequest);

        OrderDTO orderDTO = orderMapper.toOrderDTO(orderRequest);
        Workflow workflow = orchestratorService.createWorkflow(orderDTO);
        log.info("Workflow started: {}", workflow);
        return ResponseEntity.ok().body(orderDTO);
    }



}
