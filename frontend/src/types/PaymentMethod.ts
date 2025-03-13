
export interface PaymentMethodDetails {
    icon: string;
    title: string;
    method: string;
    description: string[];
}

export const mockPaymentMethods: Record<string, PaymentMethodDetails> = {
    credit: {
        icon: "credit-card",
        method: "credit-card",
        title: "Cartão de Crédito",
        description: [
            "Pague com cartão de crédito",
            "Parcelamento em até 12x"
        ]
    },
    pix: {
        icon: "pix",
        method: "pix",
        title: "PIX",
        description: [
            "Pague com 5% de desconto no PIX"
        ]
    },
    boleto: {
        icon: "barcode",
        method: "boleto",
        title: "Boleto Bancário",
        description: [
            "Vencimento: 3 dias após a confirmação",
            "Total: R$ 619,90"
        ],
    }
};