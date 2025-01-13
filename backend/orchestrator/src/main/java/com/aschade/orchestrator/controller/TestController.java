package com.aschade.orchestrator.controller;

import com.aschade.orchestrator.entity.dto.BoletoPayment;
import com.aschade.orchestrator.entity.dto.CustomerDTO;
import com.aschade.orchestrator.entity.OrderRequest;
import com.aschade.orchestrator.entity.dto.ProductDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teste")
public class TestController {


    private static final Logger log = LoggerFactory.getLogger(TestController.class);
    private AmqpTemplate amqpTemplate;

    @Value("${rabbitmq.exchange.name}")
    private String exchangeName;

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
        productDTOS.add(new ProductDTO());
        orderRequest.setProducts(productDTOS);

        return ResponseEntity.ok(orderRequest);
    }
}
