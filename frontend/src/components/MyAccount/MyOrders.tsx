
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
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <span className="font-bold text-lg">{order.id}</span>
                                        <span className="mx-3 text-zinc-600">•</span>
                                    </div>
                                </div>
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