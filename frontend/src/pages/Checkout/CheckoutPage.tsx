import { useState } from "react";

import Navbar from "../../components/Home/Navbar";
import StepAddress from "../../components/Checkout/StepAddress";
import StepPayment from "../../components/Checkout/StepPayment";
import StepConfirmation from "../../components/Checkout/StepConfirmation";
import StepBarProgress from "../../components/Checkout/StepBarProgress";
import { Address } from "../../types/AddressMethod";
import { mockPaymentMethods, PaymentMethodDetails } from "../../types/PaymentMethod";
import SummaryCheckout from "../../components/Checkout/SumaryCheckout";

const CheckoutPage: React.FC = () => {
    // Estado para controlar a etapa atual do checkout
    const [currentStep, setCurrentStep] = useState<number>(1);
    // Estado para controlar o método de pagamento selecionado

    // Estado para controlar a validade dos formulários
    const [formValid, setFormValid] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [paymentMethodData, setPaymentMethodData] = useState<PaymentMethodDetails>(mockPaymentMethods.credit);

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

    const handlePaymentMethod = (method: string) => {
        setPaymentMethod(method);
        setPaymentMethodData(mockPaymentMethods[method]);
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
    const address: Address = {
        name: "João Silva",
        number: "123",
        street: "Rua das Flores",
        neighborhood: "Jardim Primavera",
        complement: "Apto 45",
        city: "São Paulo",
        state: "SP",
        zip: "01234-567",
        referencePoint: "Próximo ao mercado XPTO"
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
                    <StepBarProgress
                        currentStep={currentStep}
                    />
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
                                        onMethod={handlePaymentMethod}
                                        onCanProgress={handleCanProgress}
                                    />
                                )}

                                {/* Step 3: Confirmação */}
                                {currentStep === 3 && (
                                    <StepConfirmation
                                        addressData={address}
                                        paymentData={paymentMethodData}
                                        onCanProgress={handleCanProgress}
                                    />
                                )}
                            </div>
                        </div>

                        <SummaryCheckout
                            shipping={orderSummary.shipping}
                            subtotal={orderSummary.subtotal}
                            total={orderSummary.total}
                            discount={orderSummary.discount}
                        />                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;