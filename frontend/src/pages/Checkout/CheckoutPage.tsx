import Navbar from "../../components/Home/Navbar";
import StepAddress from "../../components/Checkout/StepAddress";
import StepPayment from "../../components/Checkout/StepPayment";
import StepConfirmation from "../../components/Checkout/StepConfirmation";
import StepBarProgress from "../../components/Checkout/StepBarProgress";
import { Address } from "../../types/AddressMethod";
import { mockPaymentMethods, PaymentMethodDetails } from "../../types/PaymentMethod";
import SummaryCheckout from "../../components/Checkout/SumaryCheckout";
import { useState } from "react";


const CheckoutPage: React.FC = () => {

    const [currentStep, setCurrentStep] = useState<number>(1);

    const [selectedAddress, setSelectedAddress] = useState<Address>({} as Address);

    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [paymentMethodData, setPaymentMethodData] = useState<PaymentMethodDetails>(mockPaymentMethods.credit);

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

    const handlePaymentMethod = (method: string) => {
        setPaymentMethod(method);
        setPaymentMethodData(mockPaymentMethods[method]);
    };

    const handleFormValidation = (valid: boolean) => {
        setFormValid(valid);
        console.log("Formulário válido: ", valid);
    }

    const handleBackToStep = (step: number) => {
        setCurrentStep(step);
    }

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4">
                    {/* Breadcrumb */}
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="hover:text-green-400 cursor-pointer">Carrinho</span> &gt;
                        <span className="text-green-400"> Pagamento</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-6">Finalizar Compra</h1>

                    <StepBarProgress
                        currentStep={currentStep}
                    />

                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        <div className="w-full lg:w-2/3">
                            <div className="bg-zinc-900 p-6 rounded-lg mb-4">

                                {currentStep === 1 && (
                                    <StepAddress
                                        onCanProgress={handleCanProgress}
                                        setCheckoutAddress={setSelectedAddress}
                                    />
                                )}

                                {currentStep === 2 && (
                                    <StepPayment
                                        onMethod={handlePaymentMethod}
                                        onCanProgress={handleCanProgress}
                                    />
                                )}

                                {currentStep === 3 && (
                                    <StepConfirmation
                                        address={selectedAddress}
                                        paymentData={paymentMethodData}
                                        onFormValid={handleFormValidation}
                                        onCanProgress={handleCanProgress}
                                        backToStep={handleBackToStep}
                                    />
                                )}

                            </div>
                        </div>

                        <SummaryCheckout
                            onCurrentStep={currentStep}
                            formValid={formValid}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;