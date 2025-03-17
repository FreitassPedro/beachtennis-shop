
const MyPerfil = () => {
    const user = {
        name: 'Rafael Silva',
        email: 'rafael.silva@exemplo.com',
        phone: '(11) 98765-4321',
        createdAt: '10/05/2023'
    };
    return (
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
    );
};

export default MyPerfil;