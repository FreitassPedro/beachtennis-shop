package com.aschade.orchestrator.listener;

import com.aschad.ecommerce.Step;
import com.aschad.ecommerce.Workflow;
import com.aschad.ecommerce.enums.StepSource;
import com.aschade.orchestrator.controller.OrchestratorController;
import com.aschade.orchestrator.service.OrchestratorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrchestratorConsumer {

    private static final Logger log = LoggerFactory.getLogger(OrchestratorConsumer.class);

    @Autowired
    private OrchestratorService orchestratorService;

    @Autowired
    private OrchestratorController orchestratorController;

    @RabbitListener(queues = "orchestrator.new.qe")
    public void consumeStartWorkflow(Workflow workflow) {
        log.info("Consuming new workflow: {}", workflow);

        orchestratorService.addInitialStep(workflow);
        orchestratorController.consumeSuccessStep(workflow, orchestratorService.findNextStep(workflow));
    }

    @RabbitListener(queues = "step.success.qe")
    public void consumeSuccessStep(Workflow workflow) {
        log.info("Consuming success step: {}", workflow.getId());

        /* Por enquanto, o código sera hardcode para o teste, o passo a passo é definido a mao,
        porem, no futuro o ideal é implementar o handler para orquestrar os proximos eventos a serem seguidos
         */

        StepSource nextStep = orchestratorService.findNextStep(workflow);
        orchestratorController.consumeSuccessStep(workflow, nextStep);


    }
}
