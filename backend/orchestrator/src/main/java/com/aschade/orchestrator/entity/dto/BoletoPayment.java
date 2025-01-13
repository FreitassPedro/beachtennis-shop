package com.aschade.orchestrator.entity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BoletoPayment extends PaymentMethod {

    private String codigoBarras;

    public BoletoPayment(String codigoBarras) {
        super(PaymentType.BOLETO);
        this.codigoBarras = codigoBarras;
    }



}
