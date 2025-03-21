import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext/CheckoutContext";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Navbar from "../../components/Home/Navbar";

const CheckoutProcessing = () => {
    const purchaseData = {
        orderId: 'ORDER-12345',
        items: [
            { name: 'Produto A', quantity: 1, price: 199.99 },
            { name: 'Produto B', quantity: 2, price: 49.50 },
        ],
        total: 298.99,
        paymentMethod: 'Cartão de Crédito', // or 'PIX' or 'Boleto Bancário'
        discount: 0, // or the discount amount
        installments: 3, // if applicable
        paymentDate: new Date().toLocaleDateString(),
    };

    const calculateTotal = () => {
        let total = 0;
        purchaseData.items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <div className="max-w-3xl mx-auto py-10">

                <h1 className="text-3xl font-bold mb-6 text-center">Seu Pedido foi Gerado! #12212</h1>
                <div className="bg-zinc-900 rounded-lg p-6 py-10 text-center border-l-green-400 border-l-1">
                    <div className="flex flex-row">
                        <div className="animate-pulse">
                            <div className="animate-bounce">
                                <svg className="w-16 h-16" viewBox="0 0 252.713 252.713" >
                                    <g>
                                        <path
                                            d="M204.915,154.299c17.071-42.424-0.294-99.271-28.488-127.463C159.508,9.922,136.644,0.602,112.042,0.602 c-26.796,0-52.311,10.757-71.847,30.296C1.516,69.584-0.309,130.692,36.127,167.133c21.401,21.398,56.789,35.227,90.166,35.227 c13.66,0,26.183-2.268,37.304-6.738l40.655,40.659c4.611,4.616,10.748,7.149,17.272,7.149c6.521,0,12.653-2.533,17.269-7.149 l6.776-6.781c9.525-9.521,9.525-25.021,0-34.546L204.915,154.299z M162.117,180.616c-10.305,4.914-22.359,7.406-35.824,7.406 c-29.309,0-61.473-12.471-80.029-31.026c-30.845-30.85-29.02-82.867,4.065-115.963c16.585-16.583,39.08-26.094,61.713-26.094 c20.775,0,40.041,7.824,54.248,22.028c25.253,25.251,41.168,79.046,23.629,115.847l-2.179,4.573l8.06,8.061l-21.049,21.048 l-8.055-8.051L162.117,180.616z M235.432,219.362l-6.776,6.781c-3.818,3.808-10.459,3.808-14.268,0l-29.505-29.506l21.044-21.048 l29.51,29.505C239.362,209.029,239.362,215.428,235.432,219.362z">
                                        </path>
                                        <path
                                            d="M37.373,182.842c-19.191-1.586-35.804,13.05-37.267,31.896c-0.716,9.24,2.208,18.206,8.235,25.239 c6.025,7.038,14.433,11.312,23.671,12.031c0.908,0.07,1.811,0.104,2.705,0.104c17.987,0,33.167-14.058,34.562-32.007 c0.716-9.241-2.208-18.207-8.235-25.24C55.019,187.826,46.611,183.557,37.373,182.842z M36.265,197.128 c5.421,0.42,10.352,2.927,13.884,7.062c3.536,4.126,5.25,9.391,4.831,14.809c-0.854,11.057-10.695,19.536-21.863,18.72 c-5.421-0.425-10.352-2.931-13.889-7.066c-3.536-4.13-5.253-9.381-4.831-14.804c0.817-10.533,9.714-18.78,20.257-18.78 C35.189,197.072,35.726,197.091,36.265,197.128z">
                                        </path>
                                        <animate attributeName="fill" values="gray;#10B981;gray" dur="3s" repeatCount="indefinite" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <p className="text-lg mb-4">Agora deixe com a gente, estamos processando o seu pagamento. Por favor, aguarde.</p>
                    </div>
                    <p className="text-gray-400 mt-4">Você receberá um e-mail de confirmação assim que o pagamento for processado.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Detalhes da Compra</h2>

                    <div className="mb-4">
                        <p className="text-gray-400">Número do Pedido: <span className="text-white">{purchaseData.orderId}</span></p>
                        <p className="text-gray-400">Data do Pagamento: <span className="text-white">{purchaseData.paymentDate}</span></p>
                        <p className="text-gray-400">Método de Pagamento: <span className="text-white">{purchaseData.paymentMethod}</span></p>
                        {purchaseData.installments && (
                            <p className="text-gray-400">Parcelas: <span className="text-white">{purchaseData.installments}x</span></p>
                        )}
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Itens:</h3>
                    <ul className="space-y-2">
                        {purchaseData.items.map((item, index) => (
                            <li key={index} className="flex justify-between">
                                <span>{item.name} ({item.quantity}x)</span>
                                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 border-t border-zinc-700 pt-4">
                        {purchaseData.discount > 0 && (
                            <div className="flex justify-between mb-2">
                                <span>Desconto:</span>
                                <span>- R$ {purchaseData.discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>R$ {(calculateTotal() - purchaseData.discount).toFixed(2)}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};


export default CheckoutProcessing;