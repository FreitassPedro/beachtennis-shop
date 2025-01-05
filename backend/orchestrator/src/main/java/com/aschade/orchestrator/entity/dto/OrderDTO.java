package com.aschade.orchestrator.entity.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class OrderDTO {

    private String customerId;
    private List<ProductDTO> products;
    private Integer totalItems;
    private double totalAmount;
    private String couponCode;
    /*
     private CustomerDTO customer;
    private List<ProductDTO> products;
    // private PaymentMethodDTO paymentMethod;
    private double subtotal;
    private double shippingCost;
    private double total;
    private String couponCode;
     */


}
