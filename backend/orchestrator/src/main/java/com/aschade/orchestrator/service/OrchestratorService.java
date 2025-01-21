package com.aschade.orchestrator.service;

import com.aschad.ecommerce.entity.*;
import com.aschad.ecommerce.enums.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

import static com.aschad.ecommerce.enums.StepSource.ORCHESTRATOR;

@Service
public class OrchestratorService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Value("${rabbitmq.validation.exchange.name}")
    private String validationExchange;

    @Autowired
    private WorkflowService workflowService;



    private static final Logger log = LoggerFactory.getLogger(OrchestratorService.class);

    public Workflow createWorkflow(Order preOrder) {
        Workflow workflow = Workflow.builder()
                .id(preOrder.getId())
                .transactionId(UUID.randomUUID().toString())
                .payload(preOrder)
                .status(WorkflowStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .stepsHistory(new ArrayList<>())
                .build();

        preOrder.setWorkflow(workflow);

        return workflow;
    }

    public void addFinalWorkflow(Workflow workflow) {
        Step step = Step.builder()
                .source(ORCHESTRATOR)
                .status(StepStatus.SUCCESS)
                .message("Ending workflow")
                .timestamp(LocalDateTime.now())
                .build();

        workflow.getStepsHistory().add(step);
        workflow.setStatus(WorkflowStatus.SUCCESS);
    }

    public ValidationResult sendToValidation(OrderRequest orderRequest) {
        return (ValidationResult) rabbitTemplate.convertSendAndReceive(validationExchange, "validation.request", orderRequest);
    }

    public void addInitialStep(Workflow workflow) {
        Step step = Step.builder()
                .source(ORCHESTRATOR)
                .status(StepStatus.SUCCESS)
                .message("Starting workflow")
                .workflow(workflow)
                .timestamp(LocalDateTime.now())
                .build();

        workflow.addToStepsHistory(step);
    }

    private void enqueueWorkflow(Workflow workflow) {
        rabbitTemplate.convertAndSend("orchestrator.exchange", "step.success.qe", workflow);
    }


    // TODO: melhorar forma de encontrar o proximo passo
    public StepSource findNextStep(Workflow workflow) {
        log.info("Finding next step for workflow: {} - {}", workflow.getId(), workflow.getStepsHistory());
        int ordinal = workflow.getStepsHistory().getLast().getSource().ordinal();
        if (ordinal == StepSource.values().length - 1) {
            addFinalWorkflow(workflow);
        }

        return StepSource.values()[ordinal + 1];


    }

    public void createOrderByOrderRequest(MainCreation mainCreation) {
        rabbitTemplate.convertAndSend("order.exchange", "order.new", mainCreation);
    }
}
