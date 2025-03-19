import { Footer } from "../../components/Home/Footer";
import SummaryCart from "../../components/Carrinho/SumaryCart";
import ItemCart from "../../components/Carrinho/ItemCart";
import EmptyCart from "../../components/Carrinho/EmptyCart";
import CouponCart from "../../components/Carrinho/CouponCart";
import ShippingCart from "../../components/Carrinho/ShippingCart";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";



const Cart: React.FC = () => {
    const { items } = useContext(CartContext);
   
    const [shipping, setShipping] = useState(0.00);
    const subtotal = items.reduce((total, item) => total + item.price, 0);
    const discount = 10.00;
    const total = subtotal + shipping - discount;

    const handleShipping = (value: number) => {
        setShipping(value);
    }

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <div className="container mx-auto py-8 px-4 text-white">
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="text-green-400"> Carrinho</span>
                    </div>

                    {items.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <>
                            <h1 className="font-bold mb-6 text-3xl">Estamos quase lá! </h1>

                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex flex-col w-full mb-6 gap-4 lg:gap-3">
                                    <div className="bg-zinc-900 p-6 w-full rounded-lg">
                                        <div>
                                            <h2 className="font-bold text-xl mb-5">Produtos no Carrinho</h2>
                                            <div className="space-y-4 gap-5">
                                                {items.map((item) => (
                                                    <ItemCart
                                                        item={item}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <CouponCart />

                                    </div>
                                    <ShippingCart
                                        onShipping={handleShipping}
                                    />
                                </div>

                                <div className="lg:w-1/3 w-full">
                                    <SummaryCart
                                        subtotal={subtotal}
                                        shipping={shipping}
                                        discount={discount}
                                        total={total}
                                    />
                                </div>
                            </div>


                        </>
                    )}

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Cart;