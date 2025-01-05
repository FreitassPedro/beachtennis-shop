package com.aschade.orchestrator.entity;

import com.aschade.orchestrator.entity.dto.CustomerDTO;
import com.aschade.orchestrator.entity.dto.ProductDTO;
import lombok.Data;

import java.util.List;

@Data
public class OrderRequest {

    private CustomerDTO customer;
    private List<ProductDTO> products;
    // private PaymentMethodDTO paymentMethod;
    private double subtotal;
    private double shippingCost;
    private double total;
    private String couponCode;

    public Boolean isValid() {
        return customer != null
                && products != null
                && !products.isEmpty()
                && subtotal >= 0
                && shippingCost >= 0
                && total >= 0
                && (subtotal + shippingCost) == total;
    }

}
