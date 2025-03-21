import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "./CheckoutContext";
import { CartContext } from "../CartContext/CartContext";


export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {

    const { subtotal } = useContext(CartContext);

    const [shipping, setShipping] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);

    useEffect(() => {
        setTotal(subtotal + shipping);
    }, [subtotal, shipping]);


    const handleShipping = (value: number) => {
        setShipping(value);
        setTotal(subtotal + value);
    }

    const handleDiscount = (value: number) => {
        setDiscount(value);
        setTotal(subtotal + shipping - value);
    };

    const checkoutValue = {
        shipping,
        total,
        discount,
        subtotal,
        handleDiscount,
        handleShipping,
    }

    return <CheckoutContext.Provider
        value={checkoutValue}>
        {children}
    </CheckoutContext.Provider>
};