package com.aschade.orchestrator.entity.dto;
import lombok.Data;

@Data
public class ProductDTO {
    private String productCode;
    private Integer quantity;
    private Double unitPrice;
}
