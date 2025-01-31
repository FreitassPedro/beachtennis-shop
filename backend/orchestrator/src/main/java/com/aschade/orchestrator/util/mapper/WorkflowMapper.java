package com.aschade.orchestrator.util.mapper;

import com.aschade.ecommerce.dto.OrderDTO;
import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.dto.WorkflowDTO;
import com.aschade.ecommerce.entity.Workflow;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class WorkflowMapper {

    private OrderMapper orderMapper;
    private ProductMapper productMapper;


    /*
    public WorkflowDTO toDto(Workflow workflow) {
        List<ProductDTO> productDTOS = new ArrayList<>();
        workflow.getOrder().getOrderItems().forEach((product, quantity) -> productDTOS.add(productMapper.toDto(product, quantity)));

        OrderDTO orderDTO = new OrderDTO();
        return WorkflowDTO.builder()
                .id(workflow.getId())
                .status(workflow.getStatus())
                .stepsHistory(workflow.getStepsHistory())
                .payload(orderMapper.toOrderDTO())
                .build();
    }

     */



}
