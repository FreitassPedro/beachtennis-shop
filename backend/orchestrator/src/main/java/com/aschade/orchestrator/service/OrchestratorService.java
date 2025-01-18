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

    public Workflow createWorkflow() {
        Order order = Order.builder().build();
        Workflow workflow = Workflow.builder()
                .id(UUID.randomUUID().toString())
                .transactionId(UUID.randomUUID().toString())
                .payload(order)
                .status(WStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .stepsHistory(new ArrayList<>())
                .build();
        order.setWorkflow(workflow);
        workflowService.save(workflow);

        return workflow;
    }

    public void addFinalWorkflow(Workflow workflow) {
        Step step = Step.builder()
                .source(ORCHESTRATOR)
                .status(StepStatus.SUCCESS)
                .message("Ending workflow")
                .timestamp(LocalDateTime.now().toString())
                .build();

        workflow.getStepsHistory().add(step);
        workflow.setStatus(WStatus.SUCCESS);
    }

    public ValidationResult sendToValidation(OrderRequest orderRequest) {
        return (ValidationResult) rabbitTemplate.convertSendAndReceive(validationExchange, "validation.request", orderRequest);
    }

    public void addInitialStep(Workflow workflow) {
        Step step = Step.builder()
                .source(ORCHESTRATOR)
                .status(StepStatus.SUCCESS)
                .message("Starting workflow")
                .timestamp(LocalDateTime.now().toString())
                .build();
        step.setWorkflow(workflow);
        workflow.getStepsHistory().add(step);
    }

    private void enqueueWorkflow(Workflow workflow) {
        rabbitTemplate.convertAndSend("orchestrator.exchange", "step.success.qe", workflow);
    }


    // TODO: melhorar forma de encontrar o proximo passo
    public StepSource findNextStep(Workflow workflow) {
        log.info("Finding next step for workflow: {}", workflow.getId());
        int ordinal = workflow.getStepsHistory().getLast().getSource().ordinal();
        if (ordinal == StepSource.values().length - 1) {
            addFinalWorkflow(workflow);
        }

        return StepSource.values()[ordinal + 1];


    }
}
