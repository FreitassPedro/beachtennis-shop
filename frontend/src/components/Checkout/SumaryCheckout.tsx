import React, { useContext } from "react";

import { CheckoutContext } from "../../contexts/CheckoutContext/CheckoutContext";
import { useNavigate } from "react-router-dom";

interface SummaryProps {
    onCurrentStep: number;
    formValid: boolean;
}

const SummaryCheckout: React.FC<SummaryProps> = ({ onCurrentStep, formValid }) => {

    const { shipping, total, subtotal, discount } = useContext(CheckoutContext);
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/checkout/process');
    }
    
    return (
        <div className="bg-zinc-900 border-l-1 border-green-400 sticky top-4 p-5 rounded-lg lg:rounded-none h-min w-full lg:w-1/3">
            <h2 className="text-xl text-white font-bold mb-4">Resumo do Pedido</h2>

            <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                    <span>Subtotal</span>
                    <span>R$ {(subtotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                    <span>Envio</span>
                    <span>R$ {shipping}</span>
                </div>
                <div className="flex justify-between text-gray-300 border-b border-zinc-500">
                    <span>Desconto</span>
                    <span className="text-green-300">- R$ {(discount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white text-lg font-bold pt-2">
                    <h1>Total</h1>
                    <span className="text-green-400">R$ {(total).toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-sm">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
            </div>

            { onCurrentStep === 3 && (
            <div className="flex flex-col gap-3">
                 <button
                    className={`${formValid ? 'bg-green-600 hover:bg-green-700 cursor-pointer' : 'bg-zinc-600 cursor-not-allowed'} text-white py-3 px-6 font-semibold transition-colors `}
                    disabled={!formValid}
                    onClick={handleSubmit}
                >
                    Confirmar Pedido
                </button>
            </div>
            )}
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
    )
};

export default SummaryCheckout;