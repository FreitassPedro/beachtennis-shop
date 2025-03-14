import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Home/Navbar';
import Login from './Login';


const LoginRegister2: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Login form state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Register form state
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [receiveNewsletters, setReceiveNewsletters] = useState(false);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email: loginEmail, password: loginPassword, rememberMe });
        // Implement login logic here
    };

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register attempt:', {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            phone,
            birthDate,
            gender,
            agreeTerms,
            receiveNewsletters
        });
        // Implement registration logic here
    };

    return (
        <div className="min-h-screen flex flex-col bg-zinc-950">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center py-8 px-2">
                <div className="w-full max-w-5xl relative">
                    {/* Content Container */}
                    <div className="grid md:grid-cols-2 gap-8 relative p-6 md:p-10">
                        {/* Left Side - Form Toggle */}
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                <span className="text-green-400">Chade</span> Beach Tennis
                            </h1>
                            <p className="text-gray-300 text-xl mb-10 max-w-md">
                                {isLogin
                                    ? "Acesse sua conta para explorar nossa coleção exclusiva de produtos para beach tennis."
                                    : "Crie sua conta para acesso exclusivo a promoções, rastreamento de pedidos e descontos especiais."}
                            </p>
                        </div>

                        {/* Right Side - Forms */}
                        <div>
                            {isLogin ? (
                                // LOGIN FORM
                                <Login />
                            ) : (
                                // REGISTRATION FORM
                                <div>
                                    Register
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister2;