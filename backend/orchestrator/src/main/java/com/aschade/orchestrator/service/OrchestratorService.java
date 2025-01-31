package com.aschade.orchestrator.service;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.entity.*;
import com.aschade.ecommerce.entity.result.ValidationResult;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;
import com.aschade.ecommerce.enums.WorkflowStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

import static com.aschade.ecommerce.enums.StepSource.ORCHESTRATOR;
import static java.lang.String.valueOf;

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
                .order(preOrder)
                .status(WorkflowStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .stepsHistory(new ArrayList<>())
                .build();


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




    public void sendToOrderRequestToOrderService(MainCreation mainCreation) {
        rabbitTemplate.convertAndSend("order.exchange", "order.new", mainCreation);
    }


    // TODO: melhorar forma de encontrar o proximo passo
    public StepSource findNextStep(StepDTO step) {
        return step.getNext();
    }
}
