import { createContext } from "react";

interface CheckoutContextType {
    shipping: number,
    subtotal: number,
    total: number,
    setShipping: (value: number) => void,
    setTotal: (value: number) => void,
    handleShipping: (value: number) => void,
}

export const CheckoutContext = createContext<CheckoutContextType>({
    shipping: 0,
    subtotal: 0,
    total: 0,
    setShipping: () => { },
    setTotal: () => { },
    handleShipping: () => { },
});