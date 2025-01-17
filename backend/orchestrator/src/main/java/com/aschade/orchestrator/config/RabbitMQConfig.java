package com.aschade.orchestrator.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Value("${rabbitmq.exchange.name}")
    private String orchestratorExchange;

    @Value("${rabbitmq.validation.exchange.name}")
    private String validationExchange;

    @Bean
    public Exchange orchestratorExchange() {
        return new TopicExchange(orchestratorExchange);
    }

    @Bean
    public Exchange validationExchange() {
        return new TopicExchange(validationExchange);
    }

    @Bean
    public Exchange paymentExchange() {
        return new TopicExchange("payment.exchange");
    }

    @Bean
    public Exchange inventoryExchange() {
        return new TopicExchange("inventory.exchange");
    }

    @Bean
    public Exchange orderExchange() {
        return new TopicExchange("order.exchange");
    }


    @Bean
    public Queue validationWaitQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("validation.wait.qe", true);
    }

    @Bean
    public Queue stepSuccessQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("step.success.qe", true);
    }

    @Bean
    public Queue orderWaitQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("order.wait.qe", true);
    }
    @Bean
    public Queue orderFailQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("order.fail.qe", true);
    }

    @Bean
    public Queue paymentWaitQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("payment.wait.qe", true);
    }

    @Bean
    public Queue paymentFailQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("payment.fail.qe", true);
    }

    @Bean
    public Queue inventoryWaitQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("inventory.wait.qe", true);
    }

    @Bean
    public Queue inventoryFailQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("inventory.fail.qe", true);
    }

    @Bean
    public Queue validationReplyQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("validation.reply.qe", true);
    }

    @Bean
    public Queue orchestratorQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("orchestrator.new.qe", true);
    }

    /*
     Binding para de Exchanges e Filas
     */
    @Bean
    public Binding orchestratorBinding() {
        return BindingBuilder.bind(orchestratorQueue()).to(orchestratorExchange()).with("orchestrator.new").noargs();
    }

    @Bean
    public Binding validationBiding() {
       return BindingBuilder.bind(validationWaitQueue()).to(validationExchange()).with("validation.request").noargs();
    }

    @Bean
    public Binding orderWaitBinding() {
        return BindingBuilder.bind(orderWaitQueue()).to(orderExchange()).with("order.new").noargs();
    }

    @Bean
    public Binding orderFailBinding() {
        return BindingBuilder.bind(orderFailQueue()).to(orderExchange()).with("order.fail").noargs();
    }

    @Bean
    public Binding paymentWaitBinding() {
        return BindingBuilder.bind(paymentWaitQueue()).to(paymentExchange()).with("payment.new").noargs();
    }

    @Bean
    public Binding inventoryFailBinding() {
        return BindingBuilder.bind(paymentFailQueue()).to(paymentExchange()).with("payment.fail").noargs();
    }

    @Bean
    public Binding inventoryWaitBinding() {
        return BindingBuilder.bind(inventoryWaitQueue()).to(inventoryExchange()).with("payment.new").noargs();
    }

    @Bean
    public Binding paymentFailBinding() {
        return BindingBuilder.bind(paymentFailQueue()).to(paymentExchange()).with("payment.fail").noargs();
    }

    @Bean
    public Binding validationSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(validationExchange()).with("validation.success").noargs();
    }

    @Bean
    public Binding orderSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(orderExchange()).with("order.success").noargs();
    }

    @Bean
    public Binding paymentSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(paymentExchange()).with("payment.success").noargs();
    }

    @Bean
    public Binding inventorySuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(inventoryExchange()).with("inventory.success").noargs();
    }

    @Bean
    public Binding validationReplyBinding() {
        return BindingBuilder.bind(validationReplyQueue()).to(orchestratorExchange()).with("validation.response").noargs();
    }



    /*
     Binding para a Exchange de Orquestração
     */
    @Bean
    public Binding orchestratorExchangeToValidation() {
        return BindingBuilder.bind(orchestratorExchange()).to(validationExchange()).with("validation.new").noargs();
    }
    @Bean
    public Binding orchestratorExchangeToOrder() {
        return BindingBuilder.bind(orchestratorExchange()).to(orderExchange()).with("order.new").noargs();
    }
    @Bean
    public Binding orchestratorExchangeToPayment() {
        return BindingBuilder.bind(orchestratorExchange()).to(paymentExchange()).with("payment.new").noargs();
    }
    @Bean
    public Binding orchestratorExchangeToInventory() {
        return BindingBuilder.bind(orchestratorExchange()).to(inventoryExchange()).with("inventory.new").noargs();
    }

    
    // Configuração do MessageConverter para serializar e deserializar as mensagens
    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    // Configuração do AmqpTemplate para enviar mensagens
    // (Neste caso, É recomendado usar a interface AmqpTemplate em vez da classe concreta RabbitTemplate, para facilitar a troca de implementações, se necessário.
    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        AmqpTemplate amqpTemplate = new RabbitTemplate(connectionFactory);
        amqpTemplate.convertAndSend(orchestratorExchange, "", "Hello from RabbitMQ!");
        return amqpTemplate;
    }

}
