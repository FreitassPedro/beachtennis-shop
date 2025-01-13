package com.aschade.orchestrator.entity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CardPayment extends PaymentMethod{

        private String cardNumber;
        private String cardHolderName;
        private String expirationDate;
        private String cvv;

        public CardPayment(String cardNumber, String cardHolderName, String expirationDate, String cvv) {
            super(PaymentType.CREDIT_CARD);
            this.cardNumber = cardNumber;
            this.cardHolderName = cardHolderName;
            this.expirationDate = expirationDate;
            this.cvv = cvv;
        }
}
