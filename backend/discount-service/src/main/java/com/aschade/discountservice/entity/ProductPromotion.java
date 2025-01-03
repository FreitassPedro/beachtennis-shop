package com.aschade.discountservice.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

import java.math.BigDecimal;

@Entity
@DiscriminatorValue("product")
public class ProductPromotion  extends Promotion{
    private String productCode;
    private int quantity;
    private BigDecimal discountPrice;
}
