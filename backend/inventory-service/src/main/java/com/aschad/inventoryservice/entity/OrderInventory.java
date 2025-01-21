package com.aschad.inventoryservice.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "order_inventory")
public class OrderInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String orderId;

    @ManyToOne
    @JoinColumn(name = "product_inventory_id")
    private ProductInventory productInventory;

    private Integer orderQuantity;
    private Integer oldStock;
    private Integer newStock;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
