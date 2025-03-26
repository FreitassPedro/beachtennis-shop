import React, { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext/CheckoutContext";

type ShippingMethod = {
    id: number;
    name: string;
    price: number;
    deliveryDate: string;
}
interface ShippingCheckoutProps {
    cep: string;
}


const ShippingCheckout: React.FC<ShippingCheckoutProps> = ({ cep }) => {
    const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>();

    const { handleShipping } = useContext(CheckoutContext);

    

    const shippingAddress = [
        {
            id: 1,
            name: "Rua 1",
            number: 123,
            city: "São Paulo",
            state: "SP",
            zip: "12345-678"
        },
        {
            id: 2,
            name: "Rua 2",
            number: 456,
            city: "São Paulo",
            state: "SP",
            zip: "12345-678"
        }
    ];

    const shippingMethods: ShippingMethod[] = [
        { id: 1, name: 'Standard Shipping', price: 5.99, deliveryDate: 'Segunda, 18 de Março' },
        { id: 2, name: 'Express Shipping', price: 9.99, deliveryDate: 'Domingo, 15 de Março' },
        { id: 3, name: 'Correios Brasil', price: 19.99, deliveryDate: 'Terça, 24 Março' },
    ];

    useEffect(() => {
        if (selectedShipping) handleShipping(selectedShipping?.price || 0);
    }, [selectedShipping, handleShipping]);

    return (
        <>
            <div className="bg-zinc-900 text-white  my-4 rounded-lg">
                <h2 className="text-lg font-bold ">Como deseja receber?</h2>
                <span className="text-sm text-zinc-400">(Os prazos de entrega são estimados)</span>

                {
                    shippingAddress.length === 0 ? (
                        <div className="bg-">
                            <h1>Empty</h1>
                        </div>
                    ) : (
                        <div className="flex justify-between  ">
                            <div className="flex flex-col space-y-2 w-full">
                                {shippingMethods.map((item) => (
                                    <label className="flex items-center cursor-pointer p-3 gap-5  rounded-lg hover:bg-zinc-700 has-[input:checked]:bg-zinc-800 dark:has-[input:checked]:bg-zinc-800 transition-all duration-300">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="shipping1"
                                            onChange={() => setSelectedShipping(item)}
                                            className="accent-green-500"
                                        />
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <h2 className="text-white font-semibold text-lg">{item.name}</h2>
                                                <span className="text-green-400 text-lg">{item.price === 0 ? "Grátis" : `R$ ${item.price.toFixed(2).replace(".", ",")} `}</span>
                                            </div>
                                            <span className="text-sm font-normal">{item.deliveryDate}</span>
                                        </div>
                                    </label>
                                ))}


                            </div>
                        </div>

                    )
                }
            </div >
        </>
    )
}

export default ShippingCheckout;