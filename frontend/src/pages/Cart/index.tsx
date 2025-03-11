import { Footer } from "../Home/Footer";


const Cart: React.FC = () => {

    return (
        <>
            <div className="min-h-screen bg-zinc-950 flex">
                <div className="container py-8 flex">
                    <div className="bg-zinc-900 p-6">
                        <h2 className="text-white font-bold text-xl">Produtos no Carrinho</h2>
                        <div className="flex lg:w-2/3">
                            <div className="h-24 w-24">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className="">
                                <h2 className="text-white ">Raquete Pro Carbon </h2>
                                <span className="text-gray-300 text-sm">Promoção no PIX: <span className="font-bold text-gray-600">R$ 1.000,00</span></span>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Digite o cupom" />
                        </div>
                    </div>
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
            <Footer />

        </>
    )
}

export default Cart;