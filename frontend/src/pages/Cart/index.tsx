import { Link } from "react-router-dom";
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
        },
        {
            id: 1,
            name: "Raquete Pro Carbon",
            price: 599.90,
            originalPrice: 799.90,
            image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw=",
            code: "PRO-C-2025"
        }
        ,
        {
            id: 1,
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam",
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
                <div className="container mx-auto py-8 px-4 text-white">
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="text-green-400"> Carrinho</span>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="bg-zinc-900 text-center p-10 mx-auto w-1/3 gap-5 flex flex-col">
                            <p>Ops... parece que seu carrinho está vazio</p>
                            <Link to="/products">
                                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors duration-200">
                                    Explorar Produtos
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <h1 className="font-bold mb-6 text-3xl">Estamos quase lá! </h1>
                            <div className="flex flex-col lg:flex-row mb-6 gap-4 lg:gap-0">
                                <div className="bg-zinc-900 p-6 w-full lg:w-2/3">
                                    <div>
                                        <h2 className="font-bold text-xl mb-5">Produtos no Carrinho</h2>

                                        {cartItems.length > 0 ? (
                                            <div className="space-y-4 gap-5">
                                                {/* products list */}
                                                {cartItems.map((item) => (
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
                                                                    value={1}
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
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-400">Seu carrinho está vázio</p>
                                        )}
                                    </div>


                                    { /* Cupom */}
                                    <div className="bg-zinc-900 p-6 rounded-lg w-full">
                                        <h2 className="text-white text-lg" >Aplicar código promocional</h2>
                                        <div className="flex w-full gap-2">
                                            <input type="text "
                                                placeholder="Digite o cupom"
                                                className="bg-zinc-800 w-full text-white p-2 focus:ring-1 focus:outline-none focus:ring-green-500"
                                            />
                                            <button className="bg-green-600 hover:bg-green-700 transition-colors font-semibold py-3 px-6">
                                                Aplicar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Resumo da compra*/}
                                <div className="lg:w-1/3 w-full">
                                    <div className=" bg-zinc-800 sticky top-4 p-5 rounded-lg lg:rounded-none">
                                        <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>

                                        <div className="space-y-3 mb-4">
                                            <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                                                <span>Subtotal</span>
                                                <span>R$ 1.000,00</span>
                                            </div>
                                            <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                                                <span>Envio</span>
                                                <span>R$ 20,00</span>
                                            </div>
                                            <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                                                <span>Desconto</span>
                                                <span className="text-green-300">- R$ 0,00</span>
                                            </div>
                                            <div className="flex justify-between text-white text-lg font-bold pt-2">
                                                <h1>Total</h1>
                                                <span className="text-green-400">R$ 1.000,00</span>
                                            </div>
                                            <p className="text-gray-400 text-sm">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors duration-200">
                                                Ir para o pagamento
                                            </button>
                                        </div>

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
                        </>
                    )}

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Cart;