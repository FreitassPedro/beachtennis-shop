package com.aschade.orchestrator.service;

import com.aschad.ecommerce.*;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    public OrderDTO createOrderDTO(OrderRequest orderRequest) {

        return OrderDTO.builder()
                .customerId(orderRequest.getCustomer().getId().toString())
                .products(orderRequest.getProducts())
                .totalAmount(orderRequest.getTotalValue())
                .totalItems(orderRequest.getProducts().stream().map(p -> p.getQuantity()).reduce(0, Integer::sum))
                .couponCode(orderRequest.getCouponCode())
                .build();
    }


    public void resolvePaymentMethod(PaymentMethod paymentMethod) {
        if (paymentMethod instanceof CardPayment) {
            CardPayment cardPayment = (CardPayment) paymentMethod;
        } else if (paymentMethod instanceof BoletoPayment) {
            BoletoPayment boletoPayment = (BoletoPayment) paymentMethod;
        }
    }
}

