package com.aschade.orchestrator.controller;

import com.aschad.ecommerce.entity.MainCreation;
import com.aschad.ecommerce.entity.Workflow;
import com.aschad.ecommerce.enums.StepSource;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Slf4j
@AllArgsConstructor
@Controller
public class OrchestratorController {

    @Autowired
    private RabbitTemplate rabbitTemplate;


    public void startWorkflow(MainCreation mainCreation) {
        rabbitTemplate.convertAndSend("orchestrator.exchange", "orchestrator.new", mainCreation );
    }

    public void consumeSuccessStep(Workflow workflow, StepSource nextStep) {
        switch (nextStep) {
            case StepSource.ORDER_SERVICE:
                rabbitTemplate.convertAndSend("order.exchange", "order.new", workflow);
                break;
            case StepSource.PAYMENT_SERVICE:
                rabbitTemplate.convertAndSend("payment.exchange", "payment.new", workflow);
                break;
            case StepSource.INVENTORY_SERVICE:
                rabbitTemplate.convertAndSend("inventory.exchange", "inventory.new", workflow);
                break;
            default:
                log.error("Invalid step source: {}", nextStep);
        }
    }

    public void consumeFailStep() {
    }


    public void finishFailWorkflow() {
    }

    public void finishSuccessWorkflow() {
    }


}
