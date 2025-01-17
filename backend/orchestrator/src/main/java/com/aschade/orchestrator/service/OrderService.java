package com.aschade.orchestrator.service;

import com.aschad.ecommerce.*;
import com.aschade.orchestrator.exception.InvalidOrderRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrchestratorService orchestratorService;

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


}

