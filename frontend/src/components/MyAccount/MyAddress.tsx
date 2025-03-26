import React from 'react';

const MyAddress = () => {
    const addresses = [
        {
            id: 1,
            street: 'Rua Exemplo, 123',
            city: 'São Paulo',
            state: 'SP',
            zip: '01000-000',
            isDefault: true,
        },
        {
            id: 2,
            street: 'Avenida Teste, 456',
            city: 'Rio de Janeiro',
            state: 'RJ',
            zip: '20000-000',
            isDefault: false,
        },
    ];

    return (
        <div>
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Meus Endereços</h2>
                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Adicionar Endereço
                </button>
            </div>
            <div className="p-6">
                {addresses.map((address) => (
                    <div
                        key={address.id}
                        className={`border border-zinc-700 rounded-md p-4 mb-4 ${address.isDefault ? 'border-l-4 border-l-green-400' : ''} `}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-white font-semibold">{address.street}</p>
                                <p className="text-gray-400">
                                    {address.city}, {address.state} - {address.zip}
                                </p>
                                {address.isDefault && (
                                    <p className="text-green-400 mt-2">Endereço Padrão</p>
                                )}
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-yellow-400 hover:underline">
                                    Editar
                                </button>
                                <button className="text-red-500 hover:underline">
                                    Remover
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default MyAddress;