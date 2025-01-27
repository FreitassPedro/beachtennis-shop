package com.aschade.orchestrator.util.mapper;

import org.springframework.stereotype.Component;

@Component
public class WorkflowMapper {

    private OrderMapper orderMapper;
    private ProductMapper productMapper;

    /*
    public WorkflowDTO toDto(Workflow workflow) {
        List<ProductDTO> productDTOS = new ArrayList<>();
        workflow.getPayload().getProducts().forEach((product, quantity) -> productDTOS.add(productMapper.toDto(product, quantity)));
        return WorkflowDTO.builder()
                .id(workflow.getId())
                .status(workflow.getStatus())
                .stepsHistory(workflow.getStepsHistory())
                .payload(orderMapper.toOrderDTO())
                .build();
    }

     */

}
