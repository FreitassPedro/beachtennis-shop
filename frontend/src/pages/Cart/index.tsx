import { Footer } from "../Home/Footer";

const Cart: React.FC = () => {
    // Mock, remover no futuro
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

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <div className="container mx-auto py-8 text-white">
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="text-green-400">Carrinho</span>
                    </div>

                    <h1 className="font-bold mb-6 text-2xl">Seu carrinho</h1>

                    <div className="flex flex-row">
                        <div className="bg-zinc-900 p-6 w-full">
                            <h2 className="font-bold text-xl mb-5">Produtos no Carrinho</h2>

                            <div className="space-y-4 flex gap-5">
                                <div className="flex flex-col">
                                    {/* Product imagem */}
                                    <div className="h-24 w-24 overflow-hidden">
                                        <img src={cartItems[0].image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Product Info */}
                                <div className="flex-grow">
                                    <h3 className="text-white font-semibold">{cartItems[0].name}</h3>
                                    <p className="text-gray-400 text-sm">Código: {cartItems[0].code}</p>
                                    <div className="flex items-center mt-1">
                                        <span className="text-gray-400 line-through text-sm mr-2">
                                            R$ 100
                                        </span>
                                        <span className="text-green-400 font-bold">
                                            R$ 100
                                        </span>
                                    </div>
                                </div>

                                {/* Quantidade */}
                                <div className="flex items-center gap-2" >
                                    <div className="">
                                        <button className="bg-zinc-800 text-white w-8 h-8 hover:bg-zinc-700">
                                            -
                                        </button>
                                        <input type="number"
                                            className="bg-zinc-700 h-8 w-8 text-white text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            min={1}
                                            value={1}
                                        />
                                        <button className="bg-zinc-800 text-white w-8 h-8 hover:bg-zinc-700">
                                            +
                                        </button>
                                    </div>
                                    {/* lixeira */}
                                    <button className="text-gray-400 hover:text-red-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            { /* Cupom */}
                            <div className="">
                                <h2 className="text-white text-lg" >Aplicar código promocional</h2>
                                <div className="flex">
                                    <input type="text"
                                        placeholder="Digite o cupom"
                                        className="bg-zinc-700  text-white p-2 focus:ring-1 focus:outline-none focus:ring-green-500"
                                    />
                                    <button className="bg-green-600 font-semibold py-3 px-4">
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Resumo da compra*/}
                        <div className="bg-zinc-700 lg:w-1/3">
                            <div>
                                <span>Valor dos Produtos</span>
                                <span>R$ 1.000,00</span>
                            </div>
                            <div>
                                <span>Envio</span>
                                <span>R$ 20,00</span>
                            </div>

                            <div>
                                <h1>Total</h1>
                                <span>R$ 1.000,00</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6  font-semibold transition-colors">
                                    Ir para o pagamento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Cart;