package com.aechad.orchestrator.entity;

import com.aechad.orchestrator.enums.SSource;
import com.aechad.orchestrator.enums.WSource;
import com.aechad.orchestrator.enums.SStatus;
import jakarta.persistence.PrePersist;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Step {

    private SSource source;
    private SStatus status;
    private String message;
    private String timestamp;

    @PrePersist
    public void prePersist() {
        this.timestamp = String.valueOf(System.currentTimeMillis());
    }
}
