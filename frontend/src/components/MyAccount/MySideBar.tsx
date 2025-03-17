interface MySideBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const MySideBar: React.FC<MySideBarProps> = ({ activeTab, setActiveTab }) => {

    const user = {
        name: 'Rafael Silva',
        email: 'rafael.silva@exemplo.com',
        phone: '(11) 98765-4321',
        createdAt: '10/05/2023'
    };
    return (
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
    );
};

export default MySideBar;