package com.aschade.orderservice.entity;

public abstract class PaymentMethod {

    // Existem 3 formas de pagamento: Cartão de Crédito, Boleto e Pix
    public enum PaymentMethodType {
        CREDIT_CARD, BOLETO, PIX
    }

    private Long id;
    private PaymentMethodType type;

}
