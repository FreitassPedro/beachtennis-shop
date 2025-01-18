package com.aschad.productvalidationservice.listener;

import com.aschad.ecommerce.entity.OrderRequest;
import com.aschad.ecommerce.entity.ValidationResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class ValidationListener {

    private static final Logger log = LoggerFactory.getLogger(ValidationListener.class);

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RabbitListener(queues = "validation.wait.qe")
    public ValidationResult listenValidationQueue(OrderRequest orderRequest) {

        log.info("Validation queue received a message, " + orderRequest.toString());
        ValidationResult validationResult = new ValidationResult();
        if (orderRequest.getTotalValue() == 123) {
            validationResult.setValid(false);
            validationResult.setMessage("Order is invalid, test validation");
        } else {
            validationResult.setValid(true);
            validationResult.setMessage("Order is valid");
        }
        return validationResult;
    }
}
