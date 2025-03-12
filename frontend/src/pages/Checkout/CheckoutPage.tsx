import { useState } from "react";

import Navbar from "../../components/Home/Navbar";

const PaymentProcessing: React.FC = () => {
    // Estado para controlar a etapa atual do checkout
    const [currentStep, setCurrentStep] = useState<number>(1);
    // Estado para controlar o método de pagamento selecionado
    const [paymentMethod, setPaymentMethod] = useState<string>("credit");
    // Estado para controlar a validade dos formulários
    const [formValid, setFormValid] = useState<boolean>(false);

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            // Rolar para o topo da página ao mudar de etapa
            window.scrollTo(0, 0);
        }
    };

    // Função para voltar para a etapa anterior
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            // Rolar para o topo da página ao mudar de etapa
            window.scrollTo(0, 0);
        }
    };

    // Mock data para o resumo do pedido
    const orderSummary = {
        items: [
            {
                id: 1,
                name: "Raquete Pro Carbon",
                price: 599.90,
                quantity: 1,
                image: "https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
            }
        ],
        subtotal: 599.90,
        shipping: 20.00,
        discount: 0,
        total: 619.90
    };

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4">
                    {/* Breadcrumb */}
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="hover:text-green-400 cursor-pointer"> Carrinho</span> &gt;
                        <span className="text-green-400"> Pagamento</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-6">Finalizar Compra</h1>

                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between max-w-3xl mx-auto mb-6">
                            <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <span className="text-sm">Carrinho</span>
                            </div>
                            <div className={`h-1 flex-grow mx-2 ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'}`}></div>
                            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <span className="text-sm">Pagamento</span>
                            </div>
                            <div className={`h-1 flex-grow mx-2 ${currentStep >= 3 ? 'bg-green-600' : 'bg-zinc-700'}`}></div>
                            <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 3 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <span className="text-sm">Confirmação</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        {/* Main Content - Changes based on step */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-zinc-900 p-6 rounded-lg mb-4">
                                {/* Step 1: Endereço de Entrega */}
                                {currentStep === 1 && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="md:col-span-2">
                                                <label className="block text-gray-400 mb-2">CEP</label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="00000-000"
                                                        className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-4 transition-colors">
                                                        Buscar
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Nome Completo</label>
                                                <input
                                                    type="text"
                                                    placeholder="Seu nome completo"
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Telefone</label>
                                                <input
                                                    type="tel"
                                                    placeholder="(00) 00000-0000"
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Logradouro</label>
                                                <input
                                                    type="text"
                                                    placeholder="Rua, Avenida, etc."
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Número</label>
                                                <input
                                                    type="text"
                                                    placeholder="Número"
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Complemento</label>
                                                <input
                                                    type="text"
                                                    placeholder="Apto, Bloco, etc."
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Bairro</label>
                                                <input
                                                    type="text"
                                                    placeholder="Seu bairro"
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Cidade</label>
                                                <input
                                                    type="text"
                                                    placeholder="Sua cidade"
                                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Estado</label>
                                                <select className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
                                                    <option value="">Selecione o estado</option>
                                                    <option value="SP">São Paulo</option>
                                                    <option value="RJ">Rio de Janeiro</option>
                                                    <option value="MG">Minas Gerais</option>
                                                    {/* Outros estados aqui */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors"
                                                onClick={nextStep}
                                            >
                                                Continuar para pagamento
                                            </button>
                                        </div>
                                    </>
                                )}

                                {/* Step 2: Método de Pagamento */}
                                {currentStep === 2 && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-4">Método de Pagamento</h2>

                                        <div className="mb-6">
                                            <div className="flex flex-col gap-3 mb-4">
                                                <label className="flex items-center gap-2 cursor-pointer p-3 border border-zinc-800 rounded-lg hover:bg-zinc-800">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="credit"
                                                        checked={paymentMethod === "credit"}
                                                        onChange={() => setPaymentMethod("credit")}
                                                        className="accent-green-500"
                                                    />
                                                    <div className="flex items-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                        </svg>
                                                        <span className="text-white">Cartão de Crédito</span>
                                                    </div>
                                                </label>

                                                <label className="flex items-center gap-2 cursor-pointer p-3 border border-zinc-800 rounded-lg hover:bg-zinc-800">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="pix"
                                                        checked={paymentMethod === "pix"}
                                                        onChange={() => setPaymentMethod("pix")}
                                                        className="accent-green-500"
                                                    />
                                                    <div className="flex items-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-white">PIX (5% de desconto)</span>
                                                    </div>
                                                </label>

                                                <label className="flex items-center gap-2 cursor-pointer p-3 border border-zinc-800 rounded-lg hover:bg-zinc-800">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="boleto"
                                                        checked={paymentMethod === "boleto"}
                                                        onChange={() => setPaymentMethod("boleto")}
                                                        className="accent-green-500"
                                                    />
                                                    <div className="flex items-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span className="text-white">Boleto Bancário</span>
                                                    </div>
                                                </label>
                                            </div>

                                            {/* Campos específicos para cartão de crédito */}
                                            {paymentMethod === "credit" && (
                                                <div className="bg-zinc-800 p-4 rounded-lg space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="md:col-span-2">
                                                            <label className="block text-gray-400 mb-2">Número do Cartão</label>
                                                            <input
                                                                type="text"
                                                                placeholder="0000 0000 0000 0000"
                                                                className="bg-zinc-700 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Nome no Cartão</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Nome como aparece no cartão"
                                                                className="bg-zinc-700 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="block text-gray-400 mb-2">Validade</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="MM/AA"
                                                                    className="bg-zinc-700 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-gray-400 mb-2">CVV</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="123"
                                                                    className="bg-zinc-700 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-400 mb-2">Parcelamento</label>
                                                        <select className="bg-zinc-700 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
                                                            <option value="1">À vista - R$ 619,90</option>
                                                            <option value="2">2x sem juros - R$ 309,95/mês</option>
                                                            <option value="3">3x sem juros - R$ 206,63/mês</option>
                                                            <option value="4">4x sem juros - R$ 154,97/mês</option>
                                                            <option value="5">5x sem juros - R$ 123,98/mês</option>
                                                            <option value="6">6x sem juros - R$ 103,32/mês</option>
                                                            <option value="7">7x sem juros - R$ 88,56/mês</option>
                                                            <option value="8">8x sem juros - R$ 77,49/mês</option>
                                                            <option value="9">9x sem juros - R$ 68,88/mês</option>
                                                            <option value="10">10x sem juros - R$ 61,99/mês</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Informações para PIX */}
                                            {paymentMethod === "pix" && (
                                                <div className="bg-zinc-800 p-4 rounded-lg text-center">
                                                    <p className="text-gray-300 mb-4">Gere o código PIX após confirmar o pedido. Você terá 30 minutos para efetuar o pagamento.</p>
                                                    <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                                                        <p className="text-green-400 font-bold mb-2">Total com desconto de 5%:</p>
                                                        <p className="text-white text-2xl font-bold">R$ 588,91</p>
                                                    </div>

                                                </div>
                                            )}

                                            {/* Informações para Boleto */}
                                            {paymentMethod === "boleto" && (
                                                <div className="bg-zinc-800 p-4 rounded-lg text-center">
                                                    <p className="text-gray-300 mb-4">O boleto será gerado após a confirmação do pedido. O prazo de compensação é de até 3 dias úteis.</p>
                                                    <p className="text-gray-300">O pedido será enviado somente após a confirmação do pagamento.</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 font-semibold transition-colors"
                                                onClick={prevStep}
                                            >
                                                Voltar
                                            </button>
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors"
                                                onClick={nextStep}
                                            >
                                                Revisar e confirmar
                                            </button>
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Confirmação */}
                                {currentStep === 3 && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-4">Revisar e Confirmar Pedido</h2>

                                        <div className="space-y-6 mb-6">
                                            {/* Resumo do endereço */}
                                            <div className="border border-zinc-800 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-semibold text-white">Endereço de Entrega</h3>
                                                    <button
                                                        className="text-green-400 text-sm underline"
                                                        onClick={() => setCurrentStep(1)}
                                                    >
                                                        Editar
                                                    </button>
                                                </div>
                                                <div className="text-gray-300">
                                                    <p>João Silva</p>
                                                    <p>Rua das Flores, 123 - Apto 45</p>
                                                    <p>Jardim Primavera - São Paulo/SP</p>
                                                    <p>CEP: 01234-567</p>
                                                    <p>Tel: (11) 98765-4321</p>
                                                </div>
                                            </div>

                                            {/* Resumo do pagamento */}
                                            <div className="border border-zinc-800 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-semibold text-white">Método de Pagamento</h3>
                                                    <button
                                                        className="text-green-400 text-sm underline"
                                                        onClick={() => setCurrentStep(2)}
                                                    >
                                                        Editar
                                                    </button>
                                                </div>
                                                <div className="text-gray-300">
                                                    {paymentMethod === "credit" && (
                                                        <>
                                                            <p className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                                </svg>
                                                                Cartão de Crédito
                                                            </p>
                                                            <p className="mt-1">Cartão terminado em **** 1234</p>
                                                            <p>10x de R$ 61,99 sem juros</p>
                                                        </>
                                                    )}
                                                    {paymentMethod === "pix" && (
                                                        <>
                                                            <p className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                                </svg>
                                                                PIX
                                                            </p>
                                                            <p className="mt-1">5% de desconto aplicado</p>
                                                            <p>Total: R$ 588,91</p>
                                                        </>
                                                    )}
                                                    {paymentMethod === "boleto" && (
                                                        <>
                                                            <p className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                                Boleto Bancário
                                                            </p>
                                                            <p className="mt-1">Vencimento: 3 dias após a confirmação</p>
                                                            <p>Total: R$ 619,90</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Política de Privacidade */}
                                            <div className="bg-zinc-800 p-4 rounded-lg">
                                                <label className="flex items-start gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="mt-1 accent-green-500"
                                                        onChange={(e) => setFormValid(e.target.checked)}
                                                    />
                                                    <span className="text-gray-300 text-sm">
                                                        Li e concordo com os <a href="#" className="text-green-400 underline">Termos de Uso</a> e a <a href="#" className="text-green-400 underline">Política de Privacidade</a> da loja.
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 font-semibold transition-colors"
                                                onClick={prevStep}
                                            >
                                                Voltar
                                            </button>
                                            <button
                                                className={`${formValid ? 'bg-green-600 hover:bg-green-700' : 'bg-zinc-600 cursor-not-allowed'} text-white py-3 px-6 font-semibold transition-colors`}
                                                disabled={!formValid}
                                            >
                                                Confirmar Pedido
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-zinc-900 p-6 rounded-lg sticky top-4">
                                <h2 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h2>

                                {/* Items list */}
                                <div className="max-h-64 overflow-y-auto mb-4 pr-2">
                                    {orderSummary.items.map(item => (
                                        <div key={item.id} className="flex gap-3 mb-3 pb-3 border-b border-zinc-800">
                                            <div className="h-16 w-16 bg-gray-200 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-white">{item.name}</h3>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400 text-sm">Qtd: {item.quantity}</span>
                                                    <span className="text-gray-300">R$ {item.price.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Summary pricing */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-gray-300 pb-2 border-b border-zinc-800">
                                        <span>Subtotal</span>
                                        <span>R$ {orderSummary.subtotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentProcessing;