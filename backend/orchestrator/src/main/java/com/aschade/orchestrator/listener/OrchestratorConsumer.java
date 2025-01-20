package com.aschade.orchestrator.listener;

import com.aschad.ecommerce.entity.MainCreation;
import com.aschad.ecommerce.entity.Workflow;
import com.aschad.ecommerce.enums.StepSource;
import com.aschade.orchestrator.controller.OrchestratorController;
import com.aschade.orchestrator.service.OrchestratorService;
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
    private WorkflowMapper workflowMapper;

    @RabbitListener(queues = "orchestrator.new.qe")
    public void consumeStartWorkflow(MainCreation mainCreation) {
        Workflow workflow = mainCreation.getWorkflow();
        log.info("Consuming new workflow: {}", workflow);

        orchestratorService.addInitialStep(workflow);
        workflowService.save(workflow);
        orchestratorService.createOrderByOrderRequest(mainCreation);
    }

    @RabbitListener(queues = "step.success.qe")
    public void consumeSuccessStep(Workflow workflow) {
        log.info("Consuming success step: {}", workflow.getId());

        workflowService.save(workflow);
        /* Por enquanto, o código sera hardcode para o teste, o passo a passo é definido a mao,
        porem, no futuro o ideal é implementar o handler para orquestrar os proximos eventos a serem seguidos
         */

        StepSource nextStep = orchestratorService.findNextStep(workflow);
        orchestratorController.consumeSuccessStep(workflow, nextStep);


    }
}
