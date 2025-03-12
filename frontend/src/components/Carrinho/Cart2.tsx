import { Footer } from "../Home/Footer";
import Navbar from "../Home/Navbar";

const Cart2: React.FC = () => {
    // Mock data for cart items
    const cartItems = [
        {
            id: 1,
            name: "Raquete Pro Carbon",
            price: 599.90,
            originalPrice: 799.90,
            image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw=",
            code: "PRO-C-2025"
        }
    ];

    const shipping = 20.00;
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    const total = subtotal + shipping;

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4">
                    {/* Breadcrumb */}
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="text-green-400"> Carrinho</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-6">Seu Carrinho</h1>

                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        {/* Cart Items Section */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-zinc-900 p-6 rounded-lg mb-4">
                                <h2 className="text-xl font-bold text-white mb-4">Produtos no Carrinho</h2>

                                {cartItems.length > 0 ? (
                                    <div className="space-y-4">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-zinc-800">
                                                {/* Product Image */}
                                                <div className="h-24 w-24 bg-gray-200 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
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

                                                {/* Quantity */}
                                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                                    <button className="bg-zinc-800 text-white w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value="1"
                                                        className="bg-zinc-800 text-white w-12 h-8 text-center"
                                                    />
                                                    <button className="bg-zinc-800 text-white w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                                                        +
                                                    </button>
                                                </div>

                                                {/* Remove Button */}
                                                <button className="text-gray-400 hover:text-red-400 mt-2 sm:mt-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400">Seu carrinho está vazio.</p>
                                )}
                            </div>

                            {/* Coupon Section */}
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h2 className="text-lg font-bold text-white mb-3">Cupom de Desconto</h2>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Digite o código do cupom"
                                        className="bg-zinc-800 text-white p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors">
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Section */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-zinc-900 p-6 rounded-lg sticky top-4">
                                <h2 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h2>

                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-gray-300 pb-2 border-b border-zinc-800">
                                        <span>Subtotal</span>
                                        <span>R$ {subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300 pb-2 border-b border-zinc-800">
                                        <span>Frete</span>
                                        <span>R$ {shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300 pb-2 border-b border-zinc-800">
                                        <span>Desconto</span>
                                        <span>R$ 0,00</span>
                                    </div>
                                    <div className="flex justify-between text-white text-lg font-bold pt-2">
                                        <span>Total</span>
                                        <span className="text-green-400">R$ {total.toFixed(2)}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors">
                                        Ir para o pagamento
                                    </button>
                                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 font-semibold flex items-center justify-center gap-2 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                        </svg>
                                        Continuar comprando
                                    </button>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Envio em 24h
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Pagamento seguro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Suggestions */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Você também pode gostar</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-zinc-900 cursor-pointer overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:border-green-300 hover:border hover:scale-105">
                                    <div className="relative pt-[100%] bg-gray-200">
                                        <img
                                            src={`https://fastly.picsum.photos/id/${575 + item}/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A`}
                                            alt={`Produto sugerido ${item}`}
                                            className="absolute top-0 left-0 w-full h-full object-contain object-center"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-white mb-2">Acessório Beach Tennis {item}</h3>
                                        <p className="text-green-400 text-lg font-semibold">R$ {199 + (item * 50)},90</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart2;