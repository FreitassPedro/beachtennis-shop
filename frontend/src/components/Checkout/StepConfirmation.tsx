import { useEffect, useState } from "react";
import { Address } from "../../types/AddressMethod";

import { PaymentMethodDetails } from "../../types/PaymentMethod";

interface StepConfirmationProps {
    address: Address;
    paymentData: PaymentMethodDetails;
    onCanProgress: (can: boolean) => void;
    onFormValid: (formValid: boolean) => void;
}

const StepConfirmation: React.FC<StepConfirmationProps> = ({ paymentData, address, onFormValid, onCanProgress }) => {

    const [paymentMethod, setPaymentMethod] = useState(paymentData.method);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        onFormValid(formValid);
    }, [formValid, onFormValid]);


    const handleClick = (valid: boolean) => {
        onFormValid(valid);
    };

    const handleClickProgress = (can: boolean) => {
        onCanProgress(can);
    }



    return (
        <>
            <h2 className="text-xl font-bold text-white mb-4">Revisar e Confirmar Pedido</h2>

            <div className="space-y-6 mb-6">
                <div className="border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">Endereço de Entrega</h3>
                        <button
                            className="text-green-400 text-sm underline"
                        >
                            Editar
                        </button>
                    </div>
                    <div className="text-gray-300">
                        <p>{address.addressName}</p>
                        <p>{address.recipient}</p>
                        <p>{address.street}, {address.number} - {address.complement}</p>
                        <p>{address.neighborhood} - {address.city}/{address.state}</p>
                        <p>CEP: {address.zip}</p>
                        <p>{address.referencePoint}</p>

                    </div>
                </div>

                {/* Resumo do pagamento */}
                <div className="border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">Método de Pagamento</h3>
                        <button
                            className="text-green-400 text-sm underline"
                        >
                            Editar
                        </button>
                    </div>
                    <div className="text-gray-300">
                        {paymentMethod === "credit-card" && (
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
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 font-semibold transition-colors cursor-pointer"
                    onClick={() => handleClickProgress(false)}
                >
                    Voltar
                </button>

            </div>
        </>
    );
}

export default StepConfirmation;