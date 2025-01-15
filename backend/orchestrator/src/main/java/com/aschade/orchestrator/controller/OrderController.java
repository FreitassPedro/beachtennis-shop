package com.aschade.orchestrator.controller;


import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;

import com.aschad.ecommerce.ValidationResult;
import com.aschade.orchestrator.entity.ApiErrorResponse;
import com.aschade.orchestrator.entity.Workflow;
import com.aschade.orchestrator.service.OrchestratorService;
import com.aschade.orchestrator.service.OrderService;
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

    @PostMapping()
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        log.info("Order request received: {}", orderRequest);

        orderService.resolvePaymentMethod(orderRequest.getPaymentMethod());

        if (!orderRequest.isValid()) {
            ApiErrorResponse apiErrorResponse= new ApiErrorResponse();
            apiErrorResponse.setStatus(400);
            apiErrorResponse.setMessage("Error in request body");
            apiErrorResponse.setError("There is some invalid field, please check the request body");
            apiErrorResponse.setTimestamp(System.currentTimeMillis());
            apiErrorResponse.setPath("/api/order");

            return ResponseEntity.badRequest().body(apiErrorResponse);
        }

        ValidationResult validationResult = orchestratorService.validateOrderDto(orderRequest);

        if(!validationResult.isValid()) {
            ApiErrorResponse apiErrorResponse= new ApiErrorResponse();
            apiErrorResponse.setStatus(400);
            apiErrorResponse.setMessage("Error validating order");
            apiErrorResponse.setError("There is mismatch field in the order request");
            apiErrorResponse.setTimestamp(System.currentTimeMillis());
            apiErrorResponse.setPath("/api/order");
            return ResponseEntity.badRequest().body(apiErrorResponse);
        }

        OrderDTO orderDTO = orderService.createOrderDTO(orderRequest);
        Workflow workflow = orchestratorService.createWorkflow(orderDTO);
      log.info("Workflow started: {}", workflow);
        return ResponseEntity.ok().body(orderDTO);
    }



}
