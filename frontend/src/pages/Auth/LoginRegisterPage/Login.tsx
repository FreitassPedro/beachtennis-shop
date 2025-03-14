import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
    onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onRegisterClick }) => {
    // Login form state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Register form state


    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email: loginEmail, password: loginPassword, rememberMe });
        // Implement login logic here
    };


    return (
        <div className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Faça seu login</h2>

            <form onSubmit={handleLoginSubmit}>
                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="login-email"
                        className="w-full px-3 py-2 text-sm bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-green-400 text-white"
                        placeholder="seu@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="login-password" className="block text-sm font-medium text-gray-300">
                            Senha
                        </label>
                        <Link to="/forgot-password" className="text-green-400 hover:text-green-300 text-xs">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                    <input
                        type="password"
                        id="login-password"
                        className="w-full px-3 py-2 text-sm bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-green-400 text-white"
                        placeholder="********"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Remember Me */}
                <div className="flex items-center mb-6">
                    <input
                        id="remember-me"
                        type="checkbox"
                        className="w-4 h-4 text-green-400 bg-zinc-800 border-zinc-700 rounded focus:ring-green-500"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                        Lembrar de mim
                    </label>
                </div>

                {/* Submit Button */}
                <div className='space-y-2' >
                    <button
                        type="submit"
                        className="w-full  bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm shadow-lg"
                    >
                        Entrar
                    </button>
                    <button
                        type="button"
                        onClick={onRegisterClick}
                        className="w-full bg-gray-400 hover:bg-green-300 text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm shadow-lg"
                    >
                        Criar uma conta
                    </button>
                </div>

                {/* Social Login Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-zinc-700"></div>
                    <span className="px-3 text-gray-400 text-xs">ou continue com</span>
                    <div className="flex-grow h-px bg-zinc-700"></div>
                </div>

                {/* Social Login Options */}
                <div className="" >
                    <button
                        type="button"
                        className="flex w-full items-center justify-center py-2 px-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 transition-colors text-sm"
                    >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Login;