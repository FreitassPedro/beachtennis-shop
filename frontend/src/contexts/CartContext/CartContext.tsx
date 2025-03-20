import { createContext } from 'react';
import { ItemCart } from '../../types/Products';

interface CartContextType {
    items: ItemCart[];
    addToCart: (item: ItemCart) => void;
    removeFromCart: (productId: number) => void;
    itemCounter: number;
    incrementItem : (item: ItemCart) => void;
    decrementItem : (item: ItemCart) => void;
}

export const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    itemCounter: 0,
    incrementItem : () => {},
    decrementItem : () => {},
});