package com.aschade.orchestrator.service;

import com.aschad.ecommerce.OrderDTO;
import com.aschad.ecommerce.OrderRequest;
import com.aschad.ecommerce.ValidationResult;
import com.aschade.orchestrator.entity.Step;
import com.aschade.orchestrator.entity.Workflow;
import com.aschade.orchestrator.enums.SSource;
import com.aschade.orchestrator.enums.SStatus;
import com.aschade.orchestrator.enums.WStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class OrchestratorService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Value("${rabbitmq.validation.exchange.name}")
    private String validationExchange;

    private static final Logger log = LoggerFactory.getLogger(OrchestratorService.class);

    private void startWorkflow(Workflow workflow) {
        log.info("Starting workflow!");
        Step step = Step.builder()
                .source(SSource.ORCHESTRATOR)
                .status(SStatus.SUCCESS)
                .message("Starting workflow")
                .timestamp(LocalDateTime.now().toString())
                .build();
        workflow.getStepsHistory().add(step);

        rabbitTemplate.convertAndSend(validationExchange, "", workflow);
    }

    public void endWorkflow(Workflow workflow) {
        log.info("Ending {} workflow! Sucessfully!", workflow.getId());
        Step step = Step.builder()
                .source(SSource.ORCHESTRATOR)
                .status(SStatus.SUCCESS)
                .message("Ending workflow")
                .timestamp(LocalDateTime.now().toString())
                .build();
        workflow.getStepsHistory().add(step);
        workflow.setStatus(WStatus.SUCCESS);
    }

    public Workflow createWorkflow(OrderDTO orderDTO) {
        var workflow = Workflow.builder()
                .transactionId(UUID.randomUUID().toString())
                .payload(orderDTO)
                .status(WStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .stepsHistory(new ArrayList<>())
                .build();

        startWorkflow(workflow);
        return workflow;
    }

    // Orchestrator-service
    public ValidationResult validateOrderDto(OrderRequest orderRequest) {
        return (ValidationResult) rabbitTemplate.convertSendAndReceive(validationExchange, "validation.request", orderRequest);
    }


}
