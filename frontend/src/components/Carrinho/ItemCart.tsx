import React from "react";
import { ItemCart as ItemCartType } from "../../types/Products";

interface ItemCartProps {
    item: ItemCartType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
    return (
        <div className="flex w-full justify-between flex-colsm:flex-row items-start sm:items-center gap-4 border-b border-b-zinc-800 pb-4">
            {/* Product imagem */}
            <div className="h-24 w-24 overflow-hidden">
                <img src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="flex-grow">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">Código: {item.code}</p>
                <div className="flex items-center mt-1">
                    <span className="text-gray-400 line-through text-sm mr-2">
                        R$ {item.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-green-400 font-bold">
                        R$ {item.price.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Quantidade lixeira */}
            <div className="flex flex-row flex-nowrap items-center gap-2 sm:mt-0 " >
                <div className="flex items-center">
                    <button className="bg-zinc-800 text-white w-8 h-8 hover:bg-zinc-700">
                        -
                    </button>
                    <input type="number"
                        className="bg-zinc-700 h-8 w-8 text-white text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min={1}
                        value={item.quantity}
                    />
                    <button className="bg-zinc-800 text-white w-8 h-8 hover:bg-zinc-700">
                        +
                    </button>
                </div>

                <button className="text-gray-400 hover:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>

    )
};

export default ItemCart;