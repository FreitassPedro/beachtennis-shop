import React, { useState } from 'react';
import Navbar from '../../../components/Home/Navbar';
import Login from './Login';
import Register from './Register';


const LoginRegisterPage: React.FC = () => {
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

    const handleSwitchAuthClick = () => {
        setAuthMode(authMode === 'login' ? 'register' : 'login');
    };

    return (
        <div className="min-h-screen flex flex-col bg-zinc-950">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center py-8 px-2 mx-5">
                <div className="w-full relative">
                    {/* Content Container */}
                    <div className="grid lg:grid-cols-2 gap-8 relative p-6 md:p-10">
                        {/* Left Side - Form Toggle */}
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                <span className="text-green-400">Chade</span> Beach Tennis
                            </h1>
                            <p className="text-gray-300 text-xl mb-10 max-w-md">
                                {authMode === 'login'
                                    ? "Acesse sua conta para explorar nossa coleção exclusiva de produtos para beach tennis."
                                    : "Crie sua conta para acesso exclusivo a promoções, rastreamento de pedidos e descontos especiais."}
                            </p>
                        </div>

                        {/* Right Side - Forms */}
                        <div className=''>
                            {authMode === 'login' ? (
                                // LOGIN FORM
                                <Login
                                    onSwitchAuth={handleSwitchAuthClick}
                                />
                            ) : (
                                // REGISTRATION FORM
                                <Register
                                    onSwitchAuth={handleSwitchAuthClick}
                                />
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegisterPage;