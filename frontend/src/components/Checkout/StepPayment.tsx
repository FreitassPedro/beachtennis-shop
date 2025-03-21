import { useContext, useState } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext/CheckoutContext";

interface StepPaymentProps {
    onMethod: (method: string) => void;
    onCanProgress: (can: boolean) => void;
}

const StepPayment: React.FC<StepPaymentProps> = ({ onMethod, onCanProgress }) => {
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    
    const { handleDiscount, total, discount } = useContext(CheckoutContext);

    const handleClickMethod = (method: string) => {
        setPaymentMethod(method);
        onMethod(method);
        if (method === "pix") handleDiscount(total * 0.05);
        else handleDiscount(0);
    };

    const handleClickProgress = (can: boolean) => {
        onCanProgress(can);
    }

    return (
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
                            onChange={() => handleClickMethod("credit")}
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
                            onChange={() => handleClickMethod("pix")}
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
                            onChange={() => handleClickMethod("boleto")}
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
                            <p className="text-white text-2xl font-bold">R$ {(total).toFixed(2)}</p>
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
                    onClick={() => handleClickProgress(false)}
                >
                    Voltar
                </button>
                <button
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors cursor-pointer"
                    onClick={() => handleClickProgress(true)}
                >
                    Avançar
                </button>
            </div>
        </>
    )
};

export default StepPayment;