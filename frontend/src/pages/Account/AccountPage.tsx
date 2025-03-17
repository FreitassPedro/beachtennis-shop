
import React, { useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import { Footer } from '../../components/Home/Footer';
import MyPerfil from '../../components/MyAccount/MyPerfil';
import MyOrders from '../../components/MyAccount/MyOrders';
import MyAddress from '../../components/MyAccount/MyAddress';
import MySideBar from '../../components/MyAccount/MySideBar';



const AccountPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');

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
                        <MySideBar activeTab={activeTab} setActiveTab={setActiveTab}  />

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
                                {activeTab === 'profile' && <MyPerfil />}
                                {activeTab === 'orders' && <MyOrders />}
                                {activeTab === 'addresses' && <MyAddress />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccountPage;