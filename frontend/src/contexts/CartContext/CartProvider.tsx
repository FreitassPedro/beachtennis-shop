// CartProvider.tsx
import React, { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { ItemCart } from '../../types/Products';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<ItemCart[]>([
        {
            id: 1,
            code: "PRO-C-2025",
            quantity: 1,
            name: "Raquete Pro Carbon",
            price: 599.99,
            originalPrice: 799.90,
            image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw=",
        },
        {
            id: 2,
            code: "PRO-XSL222",
            quantity: 3,
            name: "Raquete Pro Carbon",
            price: 599.90,
            originalPrice: 799.90,
            image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw=",
        },
        {
            id: 3,
            code: "PRO-C-200X",
            quantity: 1,
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam",
            price: 599.90,
            originalPrice: 799.90,
            image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw=",
        },
    ]);

    const [itemCounter, setItemCounter] = useState<number>(0);

    useEffect(() => {
        const updated = items.reduce((total, item) => total + item.quantity, 0);
        setItemCounter(updated);
    }, [items]);

    const findItem = (productId: number) => {
        return items.find((i) => i.id === productId);
    };

    const addToCart = (item: ItemCart) => {
        const existingItem = findItem(item.id);
        if (!existingItem) setItems([...items, item]);

        const updatedItems = items.map((i) => {
            if (i.id === item.id) {
                return {
                    ...i,
                    quantity: i.quantity + item.quantity,
                };
            }
            return i;
        });
        setItems(updatedItems);

    };

    const removeFromCart = (productId: number) => {
        const removedItem = items.find((i) => i.id === productId);
        if (removedItem) {
            setItems(items.filter((i) => i.id !== productId));
            setItemCounter(itemCounter - 1);
        }
    };



    const cartValue = {
        items,
        addToCart,
        removeFromCart,
        itemCounter,
    };

    return <CartContext.Provider
        value={cartValue}>
        {children}
    </CartContext.Provider>;
};