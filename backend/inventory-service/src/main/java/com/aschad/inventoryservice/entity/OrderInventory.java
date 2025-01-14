package com.aschad.inventoryservice.entity;

import java.time.LocalDateTime;
import java.util.List;

public class OrderInventory {

    private String orderId;

    private ProductDTO product;

    private Integer orderQuantity;
    private Integer oldStock;
    private Integer newStock;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
