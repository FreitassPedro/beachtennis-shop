package com.aschade.orchestrator.entity;

import com.aschad.ecommerce.OrderDTO;
import com.aschade.orchestrator.enums.WStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Builder
@AllArgsConstructor
@Data
public class Workflow {

    private String id;

    private OrderDTO payload;
    private String transactionId;
    private WStatus status;
    private List<Step> stepsHistory;
    private LocalDateTime createdAt;

    public Workflow() {}

    public void addToStepsHistory(Step step) {
        if (stepsHistory.isEmpty())  stepsHistory = new ArrayList<>();
        stepsHistory.add(step);
    }
}
