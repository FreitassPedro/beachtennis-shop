import { useState } from "react";

interface RegisterProps {
    onSwitchAuth: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitchAuth }) => {
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [receiveNewsletters, setReceiveNewsletters] = useState(false);


    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register attempt:', {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            phone: phone,
            birthDate: birthDate,
            gender: gender,
            agreeTerms: agreeTerms,
            receiveNewsletters: receiveNewsletters
        });
        // Implement registration logic here
    };
    return (
        <div className='bg-zinc-900/90 p-6 rounded-xl border border-zinc-800 shadow-xl'>
            <h2 className='text-2xl text-white font-semibold mb-6'>Crie sua conta</h2>
            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-zinc-700"></div>
                <span className="px-3 text-gray-400 text-xs">Faça registro rápido com</span>
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
            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-zinc-700"></div>
                <span className="px-3 text-gray-400 text-xs">ou </span>
                <div className="flex-grow h-px bg-zinc-700"></div>
            </div>
            <form onSubmit={handleRegisterSubmit} className='space-y-2'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-gray-400 mb-2">Nome Completo</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">CPF</label>
                        <input
                            type="text"
                            placeholder="CPF"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2">Data de Nascimento</label>
                        <input
                            type="date"
                            placeholder="Data de Nascimento"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Telefone Celular</label>
                        <input
                            type="text"
                            placeholder="Telefone Celular"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">E-mail</label>
                        <input
                            type="text"
                            placeholder="Seu e-mail"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Confirme E-mail</label>
                        <input
                            type="text"
                            placeholder="Confirme seu e-mail"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Confirme Senha</label>
                        <input
                            type="text"
                            placeholder="Sua senha"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Confirme Senha</label>
                        <input
                            type="text"
                            placeholder="Confirme sua senha"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Sexo</label>
                        <select required className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg">
                            <option value="">Não especificado</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col ">
                    <button
                        className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors"
                    >
                        Registrar
                    </button>
                    <div>
                        <a
                            className="text-green-600 hover:text-green-300 cursor-pointer underline"
                            onClick={onSwitchAuth}>Já possuo cadastro</a>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default Register;