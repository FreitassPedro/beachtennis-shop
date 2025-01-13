package com.aschade.orchestrator.entity.dto;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = CardPayment.class, name = "credit_card"),
        @JsonSubTypes.Type(value = BoletoPayment.class, name = "boleto")
})
@Data
public abstract class PaymentMethod {
    private PaymentType type;

    public PaymentMethod(PaymentType type) {
        this.type = type;
    }

    public enum PaymentType {
        CREDIT_CARD,
        BOLETO
    }


}
