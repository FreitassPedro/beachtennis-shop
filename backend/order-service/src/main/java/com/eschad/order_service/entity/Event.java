package com.eschad.order_service.entity;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class Event {
    private String id;
    private String transactionId;
    private String orderId;

    private Order order;
    private String status;
    private LocalDateTime createdAt;

}
