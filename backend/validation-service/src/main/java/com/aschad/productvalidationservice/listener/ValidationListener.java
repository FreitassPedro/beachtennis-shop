package com.aschad.productvalidationservice.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ValidationListener {

    private static final Logger log = LoggerFactory.getLogger(ValidationListener.class);

    @RabbitListener(queues = "validation.wait.qe")
    public void listenValidationQueue() {
        log.info("Validation queue received a message");
    }
}
