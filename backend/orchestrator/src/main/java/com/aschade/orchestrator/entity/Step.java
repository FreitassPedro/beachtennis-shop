package com.aschade.orchestrator.entity;

import com.aschade.orchestrator.enums.SSource;

import com.aschade.orchestrator.enums.SStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Step {

    private SSource source;
    private SStatus status;
    private String message;
    private String timestamp;


}
