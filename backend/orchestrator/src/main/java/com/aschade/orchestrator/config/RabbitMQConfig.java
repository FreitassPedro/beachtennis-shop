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
    public Exchange stockExchange() {
        return new TopicExchange("stock.exchange");
    }



    @Bean
    public Queue stockCheckQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("stock.checkStock.qe", true);
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
    public Queue stockWaitQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("stock.wait.qe", true);
    }

    @Bean
    public Queue stockFailQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("stock.fail.qe", true);
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

    @Bean
    public Queue stepFailQueue() {
        QueueBuilder queueBuilder = QueueBuilder.durable("");
        return new Queue("step.fail.qe", true);
    }

    /*
     Binding para de Exchanges e Filas
     */

    @Bean
    public Binding orchestratorFailBinding() {
        return BindingBuilder.bind(stepFailQueue()).to(orchestratorExchange()).with("step.fail").noargs();
    }
    @Bean
    public Binding stockCheckBinding() {
        return BindingBuilder.bind(stockCheckQueue()).to(stockExchange()).with("stock.checkStock").noargs();
    }

    @Bean
    public Binding orchestratorBinding() {
        return BindingBuilder.bind(orchestratorQueue()).to(orchestratorExchange()).with("orchestrator.new").noargs();
    }

    @Bean
    public Binding validationBiding() {
       return BindingBuilder.bind(validationWaitQueue()).to(validationExchange()).with("validation.request").noargs();
    }


    @Bean
    public Binding paymentWaitBinding() {
        return BindingBuilder.bind(paymentWaitQueue()).to(paymentExchange()).with("payment.new").noargs();
    }

    @Bean
    public Binding stockFailBinding() {
        return BindingBuilder.bind(paymentFailQueue()).to(paymentExchange()).with("payment.fail").noargs();
    }

    @Bean
    public Binding stockWaitBinding() {
        return BindingBuilder.bind(stockWaitQueue()).to(stockExchange()).with("payment.new").noargs();
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
    public Binding paymentSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(paymentExchange()).with("payment.success").noargs();
    }

    @Bean
    public Binding stockSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(stockExchange()).with("stock.success").noargs();
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
    public Binding orchestratorExchangeToPayment() {
        return BindingBuilder.bind(orchestratorExchange()).to(paymentExchange()).with("payment.new").noargs();
    }
    @Bean
    public Binding orchestratorExchangeTostock() {
        return BindingBuilder.bind(orchestratorExchange()).to(stockExchange()).with("stock.new").noargs();
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
