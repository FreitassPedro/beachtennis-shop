package com.aschade.orchestrator.controller;

import com.aschad.ecommerce.dto.CustomerDTO;
import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.BoletoPayment;
import com.aschad.ecommerce.entity.OrderRequest;
import com.aschad.ecommerce.entity.Workflow;
import com.aschade.orchestrator.service.WorkflowService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teste")
public class TestController {


    private static final Logger log = LoggerFactory.getLogger(TestController.class);

    private final AmqpTemplate amqpTemplate;

    @Value("${rabbitmq.exchange.name}")
    private String exchangeName;

    @Autowired
    private WorkflowService workflowservice;

    public TestController(AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
    }

    @GetMapping("/send")
    public String testSendToMessage() {
        try {
        amqpTemplate.convertAndSend(exchangeName, "", "Hello from RabbitMQ!");
        return "Message sent";
        } catch (Exception e) {
            return "Error sending message";
        }
    }

    @GetMapping("/order")
    public ResponseEntity<OrderRequest> testCreateOrder() {
        log.info("Testing: create order");
        OrderRequest orderRequest = new OrderRequest();
        orderRequest.setCustomer(new CustomerDTO());
        orderRequest.setSubtotal(1);
        orderRequest.setTotalValue(1);
        orderRequest.setPaymentMethod(new BoletoPayment("12334"));

        List<ProductDTO> productDTOS = new ArrayList<>();

        orderRequest.setProducts(productDTOS);

        return ResponseEntity.ok(orderRequest);
    }

    @GetMapping("/workflow/{id}")
    public ResponseEntity<Workflow> findWorkflowById(@PathVariable String id) {
        Workflow workflow = workflowservice.findWorkflowById(id);

        return ResponseEntity.ok(workflow);
    }
}
