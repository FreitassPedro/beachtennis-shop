package com.aschade.stockservice.repository;

import com.aschade.ecommerce.entity.OrderReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderReservationRepository extends JpaRepository<OrderReservation, Long> {
}
