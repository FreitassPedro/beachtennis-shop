package com.aschade.orchestrator.service;

import com.aschade.ecommerce.dto.StepDTO;
import com.aschade.ecommerce.entity.Step;
import com.aschade.ecommerce.entity.Workflow;
import com.aschade.ecommerce.enums.StepSource;
import com.aschade.ecommerce.enums.StepStatus;
import com.aschade.orchestrator.repository.StepRepository;
import com.aschade.orchestrator.repository.WorkflowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static com.aschade.ecommerce.enums.StepSource.ORCHESTRATOR;

@Service
public class WorkflowService {

    @Autowired
    private WorkflowRepository workflowRepository;

    @Autowired
    private StepRepository stepRepository;

    public Workflow findWorkflowById(String id) {
        return workflowRepository.findById(id).orElse(null);
    }

    @Transactional
    public void save(Workflow workflow) {
        workflowRepository.save(workflow);
    }

    public void update(Workflow workflow) {
        workflowRepository.saveAndFlush(workflow);
    }

    public Step toStep(StepDTO stepDTO) {
        Step step = new Step();
        step.setSource(stepDTO.getSource());
        step.setMessage(stepDTO.getMessage());
        step.setStatus(stepDTO.getStatus());
        step.setTimestamp(stepDTO.getTimestamp());
        return step;
    }

    public void updateSteps(Workflow workflow, StepDTO currentStepDTO, StepSource nextStepSource) {
        Step currentStep = toStep(currentStepDTO);
        Step nextStep = assignNextStep(workflow, nextStepSource);

        currentStep.setWorkflow(workflow);
        nextStep.setWorkflow(workflow);

        workflow.addToStepsHistory(currentStep);
        workflow.addToStepsHistory(nextStep);
    }

    private Step assignNextStep(Workflow workflow, StepSource nextStep) {
        return Step.builder()
                .source(ORCHESTRATOR)
                .status(StepStatus.PENDING)
                .message("SENDING TO " + nextStep)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public void saveAndFlush(Workflow workflow) {
        workflowRepository.saveAndFlush(workflow);
    }
}
