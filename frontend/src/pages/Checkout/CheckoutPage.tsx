import { useState } from "react";

import Navbar from "../../components/Home/Navbar";
import StepAddress from "../../components/Checkout/StepAddress";
import StepPayment from "../../components/Checkout/StepPayment";
import StepConfirmation from "../../components/Checkout/StepConfirmation";

const CheckoutPage: React.FC = () => {
    // Estado para controlar a etapa atual do checkout
    const [currentStep, setCurrentStep] = useState<number>(1);
    // Estado para controlar o método de pagamento selecionado

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

    const handleCanProgress = (can: boolean) => {
        if (can) nextStep();
        else prevStep();
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
                            <div className={`h-1 flex-grow mx-2 mb-6 ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'} transition-colors duration-600`}></div>
                            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <span className="text-sm">Pagamento</span>
                            </div>
                            <div className={`h-1 flex-grow mx-2 mb-6 ${currentStep >= 3 ? 'bg-green-600' : 'bg-zinc-700'}  transition-colors duration-600`}></div>
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
                                    <StepAddress
                                        onCanProgress={handleCanProgress}
                                    />
                                )}

                                {/* Step 2: Método de Pagamento */}
                                {currentStep === 2 && (
                                    <StepPayment
                                        onCanProgress={handleCanProgress}
                                    />
                                )}

                                {/* Step 3: Confirmação */}
                                {currentStep === 3 && (
                                    <StepConfirmation
                                        onCanProgress={handleCanProgress}
                                    />
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

export default CheckoutPage;