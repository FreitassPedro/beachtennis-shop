package com.aschade.orchestrator.service;

import com.aschad.ecommerce.entity.*;
import com.aschad.ecommerce.enums.OrderStatus;
import com.aschade.orchestrator.exception.InvalidOrderRequestException;
import com.aschade.orchestrator.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OrderService {

    @Autowired
    private OrchestratorService orchestratorService;

    @Autowired
    private OrderRepository orderRepository;

    public ValidationResult validateOrderRequest(OrderRequest orderRequest) {
        validateInternalFields(orderRequest);
        return validateExternalFields(orderRequest);
    }

    private void validateInternalFields(OrderRequest orderRequest) {
        if (!orderRequest.fieldsAreValid()) {
            throw new InvalidOrderRequestException("There is invalid field in the order request");
        }

        resolvePaymentMethod(orderRequest.getPaymentMethod());
    }

    private ValidationResult validateExternalFields(OrderRequest orderRequest) {
        ValidationResult validationResult = orchestratorService.sendToValidation(orderRequest);
        if (validationResult == null) {
            throw new InvalidOrderRequestException("There is no response from the validation service, please try again later");
        }
        if (!validationResult.isValid()) {
            throw new InvalidOrderRequestException("There is mismatch field in the order request");
        }
        return validationResult;
    }

    private void resolvePaymentMethod(PaymentMethod paymentMethod) {
        if (paymentMethod instanceof CardPayment) {
            CardPayment cardPayment = (CardPayment) paymentMethod;
        } else if (paymentMethod instanceof BoletoPayment) {
            BoletoPayment boletoPayment = (BoletoPayment) paymentMethod;
        }
    }


    public void save(Order order) {
        orderRepository.save(order);
    }

    public Order createPreOrder(OrderRequest orderRequest) {
        Random random = new Random();
        String orderId = String.valueOf(random.nextInt(1000000));
        return Order.builder()
                .id(orderId)
                .customerId(orderRequest.getCustomer().getId())
                .status(OrderStatus.PENDING)
                .orderDate(LocalDateTime.now())
                .build();
    }
}

