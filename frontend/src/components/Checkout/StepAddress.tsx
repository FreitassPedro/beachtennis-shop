import { useEffect, useState } from "react";
import { Address } from "../../types/AddressMethod";
import ShippingCheckout from "./ShippingCheckout";
import axios from "axios";
import { BrazilStates } from "../../types/BrazilStates";

interface StepAddressProps {
    address: Address;
    onCanProgress: (can: boolean) => void;
    onAddress: (address: Address) => void;
}

const StepAddress: React.FC<StepAddressProps> = ({ onCanProgress, address, onAddress: onAddress }) => {
    const [formAddress, setFormAddress] = useState<Address>(address);
    const [searchingZip, setSearchingZip] = useState(false);
    const [displayedZip, setDisplayedZip] = useState("");

    useEffect(() => {
        if (formAddress.zip?.length === 8) {
            fetchSearchZip(formAddress.zip);
        }
    }, [formAddress.zip])

    const isAddressValid = () => {
        return formAddress.recipient &&
            formAddress.street &&
            formAddress.number &&
            formAddress.neighborhood &&
            formAddress.city &&
            formAddress.state &&
            formAddress.zip &&
            formAddress.zip.length === 8;
    };

    const fetchSearchZip = async (cep: string) => {
        setSearchingZip(true);
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (data.error) alert("CEP não encontrado");
            else {
                console.log(data);
                setFormAddress(prev => (
                    {
                        ...prev,
                        street: data.logradouro,
                        neighborhood: data.bairro,
                        city: data.localidade,
                        complement: data.complemento,
                        state: data.uf
                    }
                ));
            }
        } catch {
            console.error("CEP inválido");
        }
        finally {
            setSearchingZip(false);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "zip") {
            const numericZip = value.replace(/\D/g, "");
            setDisplayedZip(formatZip(numericZip));
            setFormAddress(prev => ({ ...prev, zip: numericZip }));
        } else {
            setFormAddress(prev => ({ ...prev, [name]: value }));
        }
    };

    const formatZip = (zip: string) => zip.length > 5 ? `${zip.slice(0, 5)}-${zip.slice(5)}` : zip;

    const handleNullAddressName = () => {
        if (!formAddress.addressName || formAddress.addressName.trim() === "") {
            setFormAddress(prev => ({ ...prev, addressName: `Endereço de ${formAddress.recipient}` }));
        }
    };

    const handleCanProgress = () => {
        handleNullAddressName();
        onCanProgress(true);
        onAddress(formAddress);
    }


    return (
        <>
            <h2 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h2>
            {isAddressValid() && Object.keys(address).length > 0 ? (
                <div className="border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{address.addressName}</h3>
                        <button className="text-green-400 text-sm underline">Editar</button>
                    </div>
                    <div className="text-gray-300">
                        <p>{formAddress.recipient}</p>
                        <p>{formAddress.street}, {formAddress.number} - {formAddress.complement}</p>
                        <p>{formAddress.neighborhood} - {formAddress.city}/{formAddress.state}</p>
                        <p>CEP: {formAddress.zip}</p>
                        <p>{formAddress.referencePoint}</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="md:col-span-2">
                        <label className="block text-gray-400 mb-2">Nome Completo</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="recipient"
                            value={formAddress.recipient}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">CEP</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="00000-000"
                                className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                name="zip"
                                value={displayedZip}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Logradouro</label>
                        <input
                            type="text"
                            placeholder="Rua, Avenida, etc."
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="street"
                            value={formAddress.street}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Número</label>
                        <input
                            type="text"
                            placeholder="Número"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="number"
                            value={formAddress.number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Complemento</label>
                        <input
                            type="text"
                            placeholder="Apto, Bloco, etc."
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="complement"
                            value={formAddress.complement}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Bairro</label>
                        <input
                            type="text"
                            placeholder="Seu bairro"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="neighborhood"
                            value={formAddress.neighborhood}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Cidade</label>
                        <input
                            type="text"
                            placeholder="Sua cidade"
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="city"
                            value={formAddress.city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Estado</label>
                        <select
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="state"
                            value={formAddress.state}
                            onChange={handleInputChange}
                        >
                            {BrazilStates.map(state => (
                                <option key={state.sigla} value={state.sigla}>{state.nome}</option>
                            ))}
                        </select>
                    </div>

                    {
                        <div className="border-b border-zinc-800 my-8 text-white ">
                        <p className="mb-2 ">Se você deseja salvar este endereço para futuras compras, basta informar um nome para ele.</p>
                        <input
                            type="text"
                            placeholder="Casa, Trabalho, etc."
                            className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="addressName"
                            value={address.addressName}
                            onChange={handleInputChange}
                        />
                        <div className="mt-2 flex items-center justify-ce gap-2 ">
                            <input type="checkbox" id="principalAddress"
                                name="principalAddress"
                                className="bg-green-100 border-green-300 rounded-sm focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-800 focus:ring-2 dark:bg-green-700 dark:border-green-600" />
                            <label htmlFor="saveAddress">Definir como endereço principal</label>
                        </div>
                        <span className="text-gray-400 text-sm">Você poderá alterar o endereço a qualquer momento antes de outra compra</span>
                    </div>
                    }

                </div>
            )}


            {isAddressValid() && (
                <>
                    
                    <ShippingCheckout cep={formAddress.zip} />
                </>
            )}

            <div className="flex justify-end">
                <button
                    className={`${isAddressValid() ? "bg-green-600 hover:bg-green-700 " : "bg-gray-600 "} cursor-pointer text-white py-3 px-6 font-semibold transition-colors `}
                    onClick={() => handleCanProgress()}
                    disabled={!isAddressValid()}
                >
                    Avançar
                </button>
            </div>


            {searchingZip && (
                <div className="bg-gray-800/90 fixed inset-0 z-10">
                    <div className="bg-zinc-800 p-8 rounded-lg absolute top-1/2 left-1/2 flex flex-row gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400 animate-spin" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <h1 className="text-white text-lg font-semibold">Buscando CEP...</h1>

                    </div>
                </div>
            )}
        </>
    )
}

export default StepAddress;