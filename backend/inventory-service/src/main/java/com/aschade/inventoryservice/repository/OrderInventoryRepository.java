package com.aschade.inventoryservice.repository;

import com.aschade.ecommerce.entity.OrderReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderInventoryRepository extends JpaRepository<OrderReservation, Long> {
}
