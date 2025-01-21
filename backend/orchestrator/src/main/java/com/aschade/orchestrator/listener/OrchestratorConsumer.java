package com.aschade.orchestrator.listener;

import com.aschad.ecommerce.dto.StepDTO;
import com.aschad.ecommerce.entity.MainCreation;
import com.aschad.ecommerce.entity.Workflow;
import com.aschad.ecommerce.enums.StepSource;
import com.aschade.orchestrator.controller.OrchestratorController;
import com.aschade.orchestrator.service.OrchestratorService;
import com.aschade.orchestrator.service.OrderService;
import com.aschade.orchestrator.service.WorkflowService;
import com.aschade.orchestrator.util.mapper.WorkflowMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrchestratorConsumer {

    private static final Logger log = LoggerFactory.getLogger(OrchestratorConsumer.class);

    @Autowired
    private WorkflowService workflowService;

    @Autowired
    private OrchestratorService orchestratorService;

    @Autowired
    private OrchestratorController orchestratorController;

    @Autowired
    private OrderService orderService;
    @Autowired
    private WorkflowMapper workflowMapper;

    @RabbitListener(queues = "orchestrator.new.qe")
    public void consumeStartWorkflow(MainCreation mainCreation) {
        Workflow workflow = mainCreation.getWorkflow();
        log.info("Consuming new workflow: {}", workflow);

        orchestratorService.addInitialStep(workflow);
        try {
            workflowService.save(workflow);
        } catch (Exception e) {
            log.error("Error saving workflow: {}", e.getMessage());
        }
        orchestratorController.tempSendToOrderService(mainCreation);
        orchestratorService.createOrderByOrderRequest(mainCreation);
    }

    @RabbitListener(queues = "step.success.qe")
    public void consumeSuccessStep(Workflow workflow) {
        log.info("Consuming success step: {}", workflow.getId());

        try {
            workflowService.save(workflow);
        } catch (Exception e) {
            throw new RuntimeException("Error saving workflow: " + e.getMessage());
        }
        StepSource nextStep = orchestratorService.findNextStep(workflow);

        orchestratorController.consumeSuccessStep(workflow, nextStep);
    }

    @RabbitListener(queues = "step.fail.qe")
    public void consumeFailStep(StepDTO stepDTO) {
        log.error("Received fail at {} ", stepDTO);

    }
}
