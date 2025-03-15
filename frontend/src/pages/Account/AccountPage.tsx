
import React, { useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import { Footer } from '../../components/Home/Footer';

interface Order {
    id: string;
    date: string;
    status: string;
    total: number;
    products: { name: string; quantity: number; price: number }[];
}

interface Address {
    id: string;
    type: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    isDefault: boolean;
}

const AccountPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');

    // Mock user data
    const user = {
        name: 'Rafael Silva',
        email: 'rafael.silva@exemplo.com',
        phone: '(11) 98765-4321',
        createdAt: '10/05/2023'
    };

    // Mock orders data
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

    // Mock addresses data
    const addresses: Address[] = [
        {
            id: '1',
            type: 'Residencial',
            street: 'Rua das Praias',
            number: '123',
            complement: 'Apto 45',
            neighborhood: 'Beira Mar',
            city: 'Santos',
            state: 'SP',
            zipCode: '11050-200',
            isDefault: true
        },
        {
            id: '2',
            type: 'Trabalho',
            street: 'Av. Paulista',
            number: '1500',
            complement: 'Sala 304',
            neighborhood: 'Bela Vista',
            city: 'São Paulo',
            state: 'SP',
            zipCode: '01310-200',
            isDefault: false
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <section className="relative h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://www.sescpr.com.br/wp-content/uploads/2023/04/beach-tennis-2.jpg"
                        alt="Beach Tennis Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
                </div>

                <div className="container relative z-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Minha Conta</h1>
                    <p className="text-xl text-gray-300">Gerencie seus dados, pedidos e endereços</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-neutral-950">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="bg-zinc-900 rounded-xl shadow-xl p-6 sticky top-4">
                                <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-zinc-800">
                                    <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center text-black font-bold text-xl">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{user.name}</h3>
                                        <p className="text-sm text-gray-400">{user.email}</p>
                                    </div>
                                </div>

                                <nav>
                                    <ul className="space-y-1">
                                        <li>
                                            <button
                                                onClick={() => setActiveTab('profile')}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'profile' ? 'bg-green-400 text-black font-medium' : 'text-white hover:bg-zinc-800'}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                Perfil
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setActiveTab('orders')}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'orders' ? 'bg-green-400 text-black font-medium' : 'text-white hover:bg-zinc-800'}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Meus Pedidos
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setActiveTab('addresses')}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'addresses' ? 'bg-green-400 text-black font-medium' : 'text-white hover:bg-zinc-800'}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Endereços
                                            </button>
                                        </li>
                                        <li className="pt-4 mt-4 border-t border-zinc-800">
                                            <button className="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center text-red-400 hover:bg-zinc-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                                </svg>
                                                Sair
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
                                {/* Profile Tab */}
                                {activeTab === 'profile' && (
                                    <div>
                                        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                                            <h2 className="text-2xl font-bold">Informações da Conta</h2>
                                            <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                </svg>
                                                Editar
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-green-400 mb-4">Dados Pessoais</h3>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <p className="text-sm text-gray-400">Nome Completo</p>
                                                            <p className="text-white">{user.name}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-400">E-mail</p>
                                                            <p className="text-white">{user.email}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-400">Telefone</p>
                                                            <p className="text-white">{user.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-green-400 mb-4">Informações da Conta</h3>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <p className="text-sm text-gray-400">Cliente desde</p>
                                                            <p className="text-white">{user.createdAt}</p>
                                                        </div>
                                                        <div className="pt-4">
                                                            <button className="text-yellow-400 flex items-center hover:underline">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                                </svg>
                                                                Alterar senha
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-10 pt-6 border-t border-zinc-800">
                                                <h3 className="text-lg font-semibold text-green-400 mb-4">Preferências</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="newsletter"
                                                            className="h-4 w-4 bg-zinc-800 border-zinc-700 rounded focus:ring-green-400 text-green-400"
                                                            defaultChecked
                                                        />
                                                        <label htmlFor="newsletter" className="ml-2 text-white">
                                                            Receber e-mails sobre promoções e novidades
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="whatsapp"
                                                            className="h-4 w-4 bg-zinc-800 border-zinc-700 rounded focus:ring-green-400 text-green-400"
                                                            defaultChecked
                                                        />
                                                        <label htmlFor="whatsapp" className="ml-2 text-white">
                                                            Receber novidades e status de pedidos por WhatsApp
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Orders Tab */}
                                {activeTab === 'orders' && (
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
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccountPage;