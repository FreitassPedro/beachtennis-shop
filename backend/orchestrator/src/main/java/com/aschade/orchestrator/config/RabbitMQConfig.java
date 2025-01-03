package com.aschade.orchestrator.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Exchange;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Value("${rabbitmq.exchange.name}")
    private String exchangeName;

    // Fanout: envia a mensagem para todas as filas que estão ligadas a ele
    @Bean
    public Exchange exchange() {
        return new FanoutExchange(exchangeName);
    }

    // Configuração do MessageConverter para serializar e deserializar as mensagens
    // O Jackson2JsonMessageConverter é um MessageConverter que converte objetos para JSON
    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    // Configuração do AmqpTemplate para enviar mensagens
    // (Neste caso, É recomendado usar a interface AmqpTemplate em vez da classe concreta RabbitTemplate, para facilitar a troca de implementações, se necessário.
    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        AmqpTemplate amqpTemplate = new org.springframework.amqp.rabbit.core.RabbitTemplate(connectionFactory);
        amqpTemplate.convertAndSend(exchangeName, "", "Hello from RabbitMQ!");
        return amqpTemplate;
    }

}
