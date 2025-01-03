package com.aschade.orchestrator.service;

import com.aschade.orchestrator.entity.Step;
import com.aschade.orchestrator.entity.Workflow;
import com.aschade.orchestrator.enums.SSource;
import com.aschade.orchestrator.enums.SStatus;
import com.aschade.orchestrator.enums.WStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class OrchestratorService {

    private static final Logger log = LoggerFactory.getLogger(OrchestratorService.class);

    public void starWorkflow(Workflow workflow) {
        log.info("Starting workflow!");
        Step step = Step.builder()
                .source(SSource.ORCHESTRATOR)
                .status(SStatus.SUCCESS)
                .message("Starting workflow")
                .build();
        workflow.getStepsHistory().add(step);
    }

    public void endWorkflow(Workflow workflow) {
        log.info("Ending {} workflow! Sucessfully!", workflow.getId());
        Step  step = Step.builder()
                .source(SSource.ORCHESTRATOR)
                .status(SStatus.SUCCESS)
                .message("Ending workflow")
                .build();
        workflow.getStepsHistory().add(step);
        workflow.setStatus(WStatus.SUCCESS);
    }
}
