package com.aschade.orchestrator.util.mapper;

import com.aschad.ecommerce.dto.OrderDTO;
import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.dto.WorkflowDTO;
import com.aschad.ecommerce.entity.Workflow;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
