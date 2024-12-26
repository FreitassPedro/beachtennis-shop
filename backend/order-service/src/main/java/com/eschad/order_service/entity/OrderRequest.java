package com.eschad.order_service.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class OrderRequest {

    private List<OrderItemRequest> products;
}
