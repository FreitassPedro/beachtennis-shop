package com.aschad.inventoryservice.repository;

import com.aschad.inventoryservice.entity.OrderInventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderInventoryRepository extends JpaRepository<OrderInventory, Long> {
}
