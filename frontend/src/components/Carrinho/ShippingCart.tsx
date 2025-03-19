import React, { useEffect, useState } from "react";

type ShippingMethod = {
    id: number;
    name: string;
    price: number;
    deliveryDate: string;
}

interface ShippingCartProps {
    onShipping: (price: number) => void;
}

const ShippingCart: React.FC<ShippingCartProps> = ({ onShipping }) => {
    const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>();

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
        if (selectedShipping) onShipping(selectedShipping?.price || 0);
    }, [selectedShipping, onShipping]);

    return (
        <>
            <div className="bg-zinc-900 p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-2">Endereço de Entrega</h2>

                {
                    shippingAddress.length === 0 ? (
                        <div className="bg-">
                            <h1>Empty</h1>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5 lg:justify-between lg:flex-row ">
                            <form className="w-full lg:w-1/2  pr-2 mr-2 border-gray-500" >
                                <span>Consultar frete e estimativa de entrega</span>
                                <div className="flex flex-row h-13">
                                    <input
                                        type="text"
                                        placeholder="Digite o CEP"
                                        className="bg-zinc-800 text-white focus:outline-none focus:ring-1 focus:ring-green-500 w-full p-4"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors duration-200 cursor-pointer">
                                        <span className="text-white">Calcular</span>
                                    </button>
                                </div>
                            </form>
                            <div className="flex flex-col space-y-4 w-full lg:w-1/2">
                                {shippingMethods.map((item) => (
                                    <label className="flex items-center cursor-pointer p-3 gap-5 bg-zinc-900 rounded-lg hover:bg-zinc-700 has-[input:checked]:bg-zinc-800 dark:has-[input:checked]:bg-zinc-800 transition-all duration-300">
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

export default ShippingCart;