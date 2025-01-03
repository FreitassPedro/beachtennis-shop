package com.aschade.orchestrator.controller;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {


    private AmqpTemplate amqpTemplate;

    @Value("${rabbitmq.exchange.name}")
    private String exchangeName;

    public TestController(AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
    }

    @GetMapping("/send")
    public String sendToMessage() {
        try {
        amqpTemplate.convertAndSend(exchangeName, "", "Hello from RabbitMQ!");
        return "Message sent";
        } catch (Exception e) {
            return "Error sending message";
        }
    }
}
