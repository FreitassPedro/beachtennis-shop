package com.aschade.orderservice.entity;

public class PayloadDTO {
    private String customerId;
    private List<ProductDTO> products;
    private Integer totalItems;
    private double totalAmount;
    private String couponCode;

}
