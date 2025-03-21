import { createContext } from "react";

interface CheckoutContextType {
    shipping: number;
    total: number;
    discount: number;
    subtotal: number;
    handleShipping: (value: number) => void;
    handleDiscount: (value: number) => void;
}

export const CheckoutContext = createContext<CheckoutContextType>({
    shipping: 0,
    subtotal: 0,
    total: 0,
    discount: 0,
    handleShipping: () => { },
    handleDiscount: () => { },
});