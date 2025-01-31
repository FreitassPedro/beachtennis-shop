package com.aschade.orchestrator.listener;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.entity.MainCreation;
import com.aschade.ecommerce.entity.Workflow;
import com.aschade.ecommerce.enums.StepSource;
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
        log.info("Consuming new workflow: {}", workflow.getId());

        orchestratorService.addInitialStep(workflow);
        try {
            workflowService.save(workflow);
        } catch (Exception e) {
            log.error("Error saving workflow: {}", e.getMessage());
        }
        orchestratorController.tempSendToOrderService(mainCreation);
    }

    @RabbitListener(queues = "step.success.qe")
    public void consumeSuccessStep(StepDTO stepDTO) {
        log.info("Received step success {}", stepDTO);
        Workflow workflow = workflowService.findWorkflowById(stepDTO.getWorkflowId());

        StepSource nextStepSource = stepDTO.getNext();
        workflowService.updateSteps(workflow, stepDTO, nextStepSource);

        workflowService.saveAndFlush(workflow);

        orchestratorController.consumeSuccessStep(workflow, nextStepSource);
    }

    /*
    @RabbitListener(queues = "step.fail.qe")
    public void consumeFailStep(StepDTO stepDTO) {
        log.error("Received step fail :(" );

    }

     */
}
