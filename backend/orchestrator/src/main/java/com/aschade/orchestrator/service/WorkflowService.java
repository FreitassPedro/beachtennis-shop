package com.aschade.orchestrator.service;

import com.aschade.ecommerce.entity.Workflow;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.orchestrator.repository.WorkflowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkflowService {

    @Autowired
    private WorkflowRepository workflowRepository;

    public Workflow findWorkflowById(String id) {
        return workflowRepository.findById(id).orElse(null);
    }

    public void save(Workflow workflow) {
        workflowRepository.save(workflow);
    }

    public void update(Workflow workflow) {
        workflowRepository.saveAndFlush(workflow);
    }

}
