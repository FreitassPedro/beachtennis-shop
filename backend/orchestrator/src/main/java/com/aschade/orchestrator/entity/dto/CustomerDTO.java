package com.aschade.orchestrator.entity.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
    private String document;
}
