import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext/CheckoutContext";
import { CartContext } from "../../contexts/CartContext/CartContext";
import Navbar from "../../components/Home/Navbar";

const CheckoutProcessing = () => {
    const { total } = useContext(CheckoutContext);
    const { items, itemCounter } = useContext(CartContext);
    const purchaseData = {
        orderId: '12345',
        total: 298.99,
        paymentMethod: 'Cartão de Crédito', // or 'PIX' or 'Boleto Bancário'
        discount: 0, // or the discount amount
        installments: 3, // if applicable
        shipping: 10,
        paymentDate: new Date().toLocaleDateString(),
    };


    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans">
            <Navbar />
            <div className="max-w-3xl mx-auto py-10 px-4">
                {/* Header Section */}
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-green-500 rounded-full p-3 mr-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold">Pedido Confirmado!</h1>
                </div>

                {/* Order ID Card */}
                <div className="bg-zinc-900 rounded-lg p-6 mb-8 border-l-4 border-green-500 shadow-lg">
                    <div className="flex justify-between items-center">

                        <h2 className="text-xl font-bold">Pedido #{purchaseData.orderId}</h2>
                        <p className="text-gray-400">Recebido em {purchaseData.paymentDate}</p>


                    </div>
                </div>

                {/* Processing Status Card */}
                <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
                    <div className="flex items-center">
                        <div className="mr-5 animate-bounce">
                            <div className="animate-pulse">
                                <svg className="w-14 h-14" viewBox="0 0 252.713 252.713">
                                    <g>
                                        <path
                                            d="M204.915,154.299c17.071-42.424-0.294-99.271-28.488-127.463C159.508,9.922,136.644,0.602,112.042,0.602 c-26.796,0-52.311,10.757-71.847,30.296C1.516,69.584-0.309,130.692,36.127,167.133c21.401,21.398,56.789,35.227,90.166,35.227 c13.66,0,26.183-2.268,37.304-6.738l40.655,40.659c4.611,4.616,10.748,7.149,17.272,7.149c6.521,0,12.653-2.533,17.269-7.149 l6.776-6.781c9.525-9.521,9.525-25.021,0-34.546L204.915,154.299z M162.117,180.616c-10.305,4.914-22.359,7.406-35.824,7.406 c-29.309,0-61.473-12.471-80.029-31.026c-30.845-30.85-29.02-82.867,4.065-115.963c16.585-16.583,39.08-26.094,61.713-26.094 c20.775,0,40.041,7.824,54.248,22.028c25.253,25.251,41.168,79.046,23.629,115.847l-2.179,4.573l8.06,8.061l-21.049,21.048 l-8.055-8.051L162.117,180.616z M235.432,219.362l-6.776,6.781c-3.818,3.808-10.459,3.808-14.268,0l-29.505-29.506l21.044-21.048 l29.51,29.505C239.362,209.029,239.362,215.428,235.432,219.362z">
                                        </path>
                                        <path
                                            d="M37.373,182.842c-19.191-1.586-35.804,13.05-37.267,31.896c-0.716,9.24,2.208,18.206,8.235,25.239 c6.025,7.038,14.433,11.312,23.671,12.031c0.908,0.07,1.811,0.104,2.705,0.104c17.987,0,33.167-14.058,34.562-32.007 c0.716-9.241-2.208-18.207-8.235-25.24C55.019,187.826,46.611,183.557,37.373,182.842z M36.265,197.128 c5.421,0.42,10.352,2.927,13.884,7.062c3.536,4.126,5.25,9.391,4.831,14.809c-0.854,11.057-10.695,19.536-21.863,18.72 c-5.421-0.425-10.352-2.931-13.889-7.066c-3.536-4.13-5.253-9.381-4.831-14.804c0.817-10.533,9.714-18.78,20.257-18.78 C35.189,197.072,35.726,197.091,36.265,197.128z">
                                        </path>
                                        <animate attributeName="fill" values="#059669;#10B981;#059669" dur="3s" repeatCount="indefinite" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">Processando seu pagamento</h3>
                            <p className="text-gray-300">Estamos finalizando seu pedido. Isso normalmente leva apenas alguns instantes.</p>
                            <div className="mt-4 h-2 bg-green-400 animate-pulse rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <p className="text-gray-400 mt-6 text-center">
                        Você receberá um e-mail de confirmação em <span className="text-white font-medium">seu@email.com</span> assim que o pagamento for processado.
                    </p>
                </div>

                {/* Order Details Card */}
                <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
                    <div className="p-6 border-b border-zinc-700">
                        <h2 className="text-xl font-bold mb-1">Detalhes da Compra</h2>
                        <p className="text-gray-400 text-sm">Informações completas sobre o seu pedido</p>
                    </div>

                    {/* Payment Info */}
                    <div className="p-6 bg-zinc-800 border-b border-zinc-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-sm uppercase text-gray-400 mb-2">Informações do Pagamento</h3>
                            <p className="text-gray-300 mb-1">
                                <span className="inline-block w-32 text-gray-400">Método:</span>
                                <span className="font-medium">{purchaseData.paymentMethod}</span>
                            </p>
                            {purchaseData.installments && (
                                <p className="text-gray-300 mb-1">
                                    <span className="inline-block w-32 text-gray-400">Parcelas:</span>
                                    <span className="font-medium">{purchaseData.installments}x de R$ {(total / purchaseData.installments).toFixed(2)}</span>
                                </p>
                            )}
                            <p className="text-gray-300">
                                <span className="inline-block w-32 text-gray-400">Data:</span>
                                <span className="font-medium">{purchaseData.paymentDate}</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase text-gray-400 mb-2">Informações do Pedido</h3>
                            <p className="text-gray-300 mb-1">
                                <span className="inline-block w-32 text-gray-400">Número:</span>
                                <span className="font-medium">{purchaseData.orderId}</span>
                            </p>
                            <p className="text-gray-300 mb-1">
                                <span className="inline-block w-32 text-gray-400">Total de itens:</span>
                                <span className="font-medium">{itemCounter}</span>
                            </p>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="p-6 border-b border-zinc-700">
                        <h3 className="text-sm uppercase text-gray-400 mb-4">Itens do Pedido</h3>
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-0">
                                    <div className="flex items-center">
                                        <div className="bg-zinc-700 w-10 h-10 rounded flex items-center justify-center mr-3">
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                                />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm text-gray-400">{item.quantity}x de R$ {item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Totals */}
                    <div className="p-6 bg-zinc-900">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400">Subtotal:</span>
                            <span>R$ {(total).toFixed(2)}</span>
                        </div>
                        {purchaseData.discount > 0 && (
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Desconto:</span>
                                <span className="text-green-500">- R$ {purchaseData.discount.toFixed(2)}</span>
                            </div>
                        )}
                        {purchaseData.shipping > 0 && (
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Entrega:</span>
                                <span className="text-green-500">- R$ {purchaseData.shipping.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between font-bold text-lg pt-4 border-t border-zinc-700 mt-4">
                            <span>Total:</span>
                            <span className="text-green-400">R$ {(total - purchaseData.discount).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* What's Next Section */}
                <div className="mt-8 bg-gradient-to-br from-zinc-900 to-zinc rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">O que acontece agora?</h2>
                    <div className="space-y-4">
                        <div className="flex">
                            <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4">
                                <span className="text-black font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Confirmação de Pagamento</h3>
                                <p className="text-gray-400">Você receberá um e-mail assim que seu pagamento for processado.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-zinc-700 rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Processamento do Pedido</h3>
                                <p className="text-gray-400">Seu pedido será preparado para envio em até 24 horas.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-zinc-700 rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Entrega</h3>
                                <p className="text-gray-400">Você receberá notificações sobre o status da entrega.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Help Button */}
                <div className="mt-8 text-center">
                    <button className="bg-zinc-800 hover:bg-zinc-700 transition-colors text-white font-medium py-3 px-6 rounded-full inline-flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Precisa de ajuda? Clique aqui
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProcessing;