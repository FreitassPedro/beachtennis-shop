package com.aechad.orchestrator.entity;

import com.aechad.orchestrator.enums.WStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Builder
@Data
public class Workflow {

    private String id;
    private List<Step> stepsHistory;

    private String transactionId;

    private WStatus status;
    private LocalDateTime createdAt;

    private List<Order> orders;

    public void addToStepsHistory(Step step) {
        if (stepsHistory.isEmpty())  stepsHistory = new ArrayList<>();
        stepsHistory.add(step);
    }
}
