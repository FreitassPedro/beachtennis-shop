package com.aschade.orderservice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class RabbitMQConfig {

    @Value("${rabbitmq.exchange.name}")
    private String orchestratorExchange;

    // Troca principal para orquestração
    @Bean
    public TopicExchange orchestratorExchange() {
        return new TopicExchange(orchestratorExchange);
    }

    // Troca para eventos relacionados a ordens
    @Bean
    public TopicExchange orderExchange() {
        return new TopicExchange("order.exchange");
    }

    // Troca para mensagens com falha (dead-letter exchange)
    @Bean
    public DirectExchange orderDlx() {
        return new DirectExchange("order.exchange.dlq");
    }

    /*
     * Filas
     */

    // Fila para novas ordens aguardando processamento
    @Bean
    public Queue orderWaitQueue() {
        Map<String, Object> args = new HashMap<>();
        args.put("x-dead-letter-exchange", "order.exchange.dlq");
        args.put("x-dead-letter-routing-key", "order.fail"); // Roteia mensagens com falha para a fila DLQ
        return new Queue("order.wait.qe", true, false, false, args);
    }

    // Fila para mensagens com falha (dead-letter queue)
    @Bean
    public Queue orderDlqQueue() {
        return new Queue("order.dlq.qe", true);
    }

    // Fila para respostas da verificação de estoque
    @Bean
    public Queue orderStockCheckReplyQueue() {
        return new Queue("order.stockCheck.reply.qe", true);
    }

    // Fila para ordens que falharam em algum passo do processo
    @Bean
    public Queue orderFailQueue() {
        return new Queue("order.fail.qe", true);
    }

    // Fila para indicar sucesso em um passo do processo da ordem
    @Bean
    public Queue stepSuccessQueue() {
        return new Queue("step.success.qe", true);
    }


    /*
     * Ligações (Bindings)
     */

    // Liga a fila DLQ à troca DLX com a chave de roteamento "order.fail"
    @Bean
    public Binding dlqBinding() {
        return BindingBuilder.bind(orderDlqQueue()).to(orderDlx()).with("order.fail");
    }


    // Liga a fila de sucesso à troca de ordens com a chave "order.success"
    @Bean
    public Binding orderSuccessBinding() {
        return BindingBuilder.bind(stepSuccessQueue()).to(orderExchange()).with("order.success");
    }

    // Liga a fila de novas ordens à troca de ordens com a chave "order.new"
    @Bean
    public Binding orderWaitBinding() {
        return BindingBuilder.bind(orderWaitQueue()).to(orderExchange()).with("order.new");
    }

    // Liga a fila de respostas de estoque à troca de ordens com a chave "order.stockCheck.reply"
    @Bean
    public Binding orderStockCheckReplyBinding() {
        return BindingBuilder.bind(orderStockCheckReplyQueue()).to(orderExchange()).with("order.stockCheck.reply");
    }

    // Liga a troca de orquestração à troca de ordens com a chave "order.new"
    @Bean
    public Binding orchestratorExchangeToOrder() {
        return BindingBuilder.bind(orderExchange()).to(orchestratorExchange()).with("order.new");
    }

    // Configura o conversor de mensagens para JSON
    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }
}