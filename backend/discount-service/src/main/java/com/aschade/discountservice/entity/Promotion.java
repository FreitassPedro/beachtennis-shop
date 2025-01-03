package com.aschade.discountservice.entity;

import com.aschade.discountservice.entity.enums.DiscountType;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "promotion")
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "promotion_type")
public abstract class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DiscountType discountType;
    private BigDecimal discountValue;

    private LocalDateTime startDate;
    private LocalDateTime endDate;

    private boolean isActive;
}