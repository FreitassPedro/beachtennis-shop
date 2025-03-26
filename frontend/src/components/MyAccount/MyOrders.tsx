
interface Order {
    id: string;
    date: string;
    status: string;
    total: number;
    products: { name: string; quantity: number; price: number }[];
}

const MyOrders = () => {


    const orders: Order[] = [
        {
            id: '#24601',
            date: '15/02/2025',
            status: 'Entregue',
            total: 799.80,
            products: [
                { name: 'Raquete Pro Carbon', quantity: 1, price: 599.90 },
                { name: 'Kit Bolinhas Pro', quantity: 1, price: 199.90 }
            ]
        },
        {
            id: '#24578',
            date: '28/01/2025',
            status: 'Em processamento',
            total: 249.90,
            products: [
                { name: 'Bolsa Pro Tour', quantity: 1, price: 249.90 }
            ]
        }
    ];


    return (
        <div>
            <div className="p-6 border-b border-zinc-800">
                <h2 className="text-2xl font-bold">Meus Pedidos</h2>
                <p className="text-gray-400 mt-1">Acompanhe todos os seus pedidos</p>
            </div>

            {orders.length > 0 ? (
                <div className="overflow-x-auto">
                    {orders.map((order) => (
                        <div key={order.id} className="border-b border-zinc-800 p-6">
                            <div className="flex flex-col justify-between ">

                                <div className="flex items-center mb-2 justify-between w-full">
                                    <div className="flex items-center">
                                        <h2 className="font-bold text-xl">{order.id}</h2>
                                        <span className="mx-3 ">• 02/10/2025</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="bg-green-500 p-2 text-sm rounded-md font-bold">Ver detalhes</button>
                                        <button className="border-yellow-700 border-1 p-2 text-sm rounded-md font-bold">Ajuda sobre</button>
                                    </div>
                                </div>
                                <div className="mb-2 flex justify-between items-center">
                                    <div>
                                        <p className="text-green-400 font-semibold ">Pedido {order.status}</p>
                                        <span className="text-gray-300 font-sm">Concluído em 21/11/2025</span>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-green-300 font-semibold">Pagamento via PIX</p>
                                    </div>
                                </div>

                                {order.products.map((p) => (
                                    <div className="flex items-center space-y-2">
                                        <div className="bg-zinc-700 w-14 h-14 rounded flex items-center justify-center mr-3">
                                            <img
                                                src="{item.image}"
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{p.name}</h4>
                                            <p className="text-sm text-gray-400">Quantidade: {p.quantity} </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-6 text-center">
                    <p className="text-gray-400">Nenhum pedido encontrado.</p>
                </div>
            )}
        </div>
    );

}

export default MyOrders;