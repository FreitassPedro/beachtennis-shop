import { useState } from "react";
import { Address } from "../../types/AddressMethod";
import ShippingCheckout from "./ShippingCheckout";

interface StepAddressProps {
    addressMock: Address;
    onCanProgress: (can: boolean) => void;
}

const StepAddress: React.FC<StepAddressProps> = ({ onCanProgress, addressMock }) => {

    const [address, setAddressSelected] = useState<Address>(addressMock);



    const handleClick = () => {
        onCanProgress(true);
    }

    const isAddressValid = () => {
        return address.recipient
            && address.street
            && address.number
            && address.neighborhood
            && address.city
            && address.state
            && address.zip;
    }


    return (
        <>
            <h2 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h2>
            {isAddressValid() ? (
                <div className="border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{address.addressName}</h3>
                        <button
                            className="text-green-400 text-sm underline"

                        >
                            Editar
                        </button>
                    </div>
                    <div className="text-gray-300">
                        <p>{addressMock.recipient}</p>
                        <p>{addressMock.street}, {addressMock.number} - {addressMock.complement}</p>
                        <p>{addressMock.neighborhood} - {addressMock.city}/{addressMock.state}</p>
                        <p>CEP: {addressMock.zip}</p>
                        <p>{addressMock.referencePoint}</p>

                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="md:col-span-2">
                        <label className="block text-gray-400 mb-2">CEP</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="00000-000"
                                className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-4 transition-colors">
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Nome Completo</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Logradouro</label>
                        <input
                            type="text"
                            placeholder="Rua, Avenida, etc."
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Número</label>
                        <input
                            type="text"
                            placeholder="Número"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Complemento</label>
                        <input
                            type="text"
                            placeholder="Apto, Bloco, etc."
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Bairro</label>
                        <input
                            type="text"
                            placeholder="Seu bairro"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Cidade</label>
                        <input
                            type="text"
                            placeholder="Sua cidade"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Estado</label>
                        <select className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="">Selecione o estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                        </select>
                    </div>
                </div >
            )}

            <ShippingCheckout

            />
            <div className="flex justify-end">
                <button
                    className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors"
                    onClick={handleClick}
                >
                    Avançar
                </button>
            </div>
        </>
    )
}

export default StepAddress;