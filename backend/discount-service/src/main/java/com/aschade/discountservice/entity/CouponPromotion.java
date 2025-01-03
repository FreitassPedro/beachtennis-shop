package com.aschade.discountservice.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("coupon")
public class CouponPromotion extends Promotion {

    private String couponCode;

    private int usedCount;
    private int usageLimit;



}
