package com.aschade.orchestrator.controller;

import com.aschade.orchestrator.entity.OrderRequest;
import com.aschade.orchestrator.service.OrchestratorService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@AllArgsConstructor
public class OrchestratorController {

    private final OrchestratorService orchestratorService;


    public void startWorkflow() {
        log.info("Starting workflow!");
    }

    public void consumeSuccessStep() {
    }

    public void consumeFailStep() {
    }


    public void finishFailWorkflow() {
    }

    public void finishSuccessWorkflow() {
    }

}
