import { useEffect, useState } from "react";
import { Address } from "../../types/AddressMethod";
import ShippingCheckout from "./ShippingCheckout";
import axios from "axios";
import { BrazilStates } from "../../types/BrazilStates";
import { BASE_URL } from "../utils/api";

interface StepAddressProps {
    setCheckoutAddress: (address: Address) => void;
    onCanProgress: (can: boolean) => void;
}

const userId = 1;

const StepAddress: React.FC<StepAddressProps> = ({ onCanProgress,  setCheckoutAddress }) => {
    const [formAddress, setFormAddress] = useState<Address>({} as Address);
    const [addressess, setAddressess] = useState<Address[]>([]);
    const [addressSelected, setAddressSelected] = useState<Address>(addressess[0] || {} as Address);
    const [showAllAddresses, setShowAllAddresses] = useState(false);

    const [searchingZip, setSearchingZip] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(null);



    function isFormValid() {
        return (
            formAddress.recipient && formAddress.street && formAddress.number && formAddress.neighborhood && formAddress.city && formAddress.state && formAddress.zip?.length === 8
        );
    }

    useEffect(() => {
        setCheckoutAddress(addressSelected);
    }, [addressSelected, setCheckoutAddress]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/address/${userId}`)
            .then((response) => {
                setAddressess(response.data);
                setAddressSelected(response.data[0]);
                console.log(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {

            });
    }, []);

    useEffect(() => {
        if (formAddress.zip?.length === 8) {
            fetchSearchZip(formAddress.zip);
        }
    }, [formAddress.zip]);

    const handleSetAddress = (address: Address) => {
        setAddressSelected(address);
        handleEdit();

    }


    const fetchSearchZip = async (cep: string) => {
        setSearchingZip(true);
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!data.erro) {
                setFormAddress(prev => ({
                    ...prev,
                    street: data.logradouro,
                    neighborhood: data.bairro,
                    city: data.localidade,
                    complement: data.complemento,
                    state: data.uf,
                }));
            } else {
                alert("CEP não encontrado");
            }
        } catch {
            console.error("Erro ao buscar CEP");
        } finally {
            setSearchingZip(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormAddress(prev => ({ ...prev, [name]: name === "zip" ? value.replace(/\D/g, "") : value }));
    };

    const handleSaveAddress = () => {
        if (isFormValid()) {
            if (!formAddress.addressName?.trim()) {
                setFormAddress(prev => ({ ...prev, addressName: `Endereço de ${prev.recipient}` }));
            }
            setEditMode(false);
        }
        setAddressSelected(formAddress);
    };

    const handleEdit = () => {
        setEditMode(!editMode);
        setShowAllAddresses(!showAllAddresses);
        setFormAddress(addressSelected);
        console.log("Endereços: ", addressess);
    }

    const validateAddress = (address: Address) => {
        return (
            address.recipient &&
            address.street &&
            address.number &&
            address.neighborhood &&
            address.city &&
            address.state &&
            address.zip &&
            address.zip.length === 8
        );
    };

    return (
        <>
            <h2 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h2>
            {validateAddress(addressSelected) && !editMode ? (
                <div className="border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{addressSelected.addressName}</h3>
                        <button className="text-green-400 text-sm underline cursor-pointer" onClick={() => handleEdit()}>Editar</button>
                    </div>
                    <div className="text-gray-300">
                        <p>{addressSelected.recipient}</p>
                        <p>{addressSelected.street}, {addressSelected.number} - {addressSelected.complement}</p>
                        <p>{addressSelected.neighborhood} - {addressSelected.city}/{addressSelected.state}</p>
                        <p>CEP: {addressSelected.zip}</p>
                    </div>
                </div>
            ) : (
                <>
                    {
                        showAllAddresses && addressess.map((adr) => (
                            <div key={adr.id} className="border border-zinc-800 rounded-lg p-4 mb-4 hover:border hover:border-green-400">
                                <button className="flex flex-col w-full cursor-pointer" onClick={() => handleSetAddress(adr)}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-white">{adr.addressName}</h3>
                                        <span className="text-green-400 text-sm underline cursor-pointer">Escolher</span>
                                    </div>
                                    <div className="text-gray-300">
                                        <p>{adr.recipient}</p>
                                        <p>{adr.street}, {adr.number} - {adr.complement}</p>
                                        <p>{adr.neighborhood} - {adr.city}/{adr.state}</p>
                                        <p>CEP: {adr.zip}</p>
                                    </div>
                                </button>
                            </div>
                        ))
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="col-span-2 text-white">
                            <p className="mb-2 ">Se você deseja salvar este endereço para futuras compras, basta informar um nome para ele.</p>
                            <input
                                type="text"
                                placeholder="Casa, Trabalho, etc."
                                className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                name="addressName"
                                value={addressSelected.addressName}
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
                        <div>
                            <label className="block text-gray-400 mb-2">CEP</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="00000-000"
                                    className="bg-zinc-800 text-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    name="zip"
                                    value={formAddress.zip}
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
                        <div className="col-span-2 flex text-center justify-center gap-4">
                            {
                                validateAddress(addressSelected) && (
                                    <div className="col-span-2 flex text-center justify-center">
                                        <button className="bg-gray-500 p-3 font-semibold cursor-pointer text-white" onClick={handleEdit}>Cancelar</button>
                                    </div>
                                )

                            }
                            <div className="col-span-2 flex text-center justify-center">
                                <button className="bg-green-500 p-3 font-semibold cursor-pointer text-white" onClick={handleSaveAddress}>Salvar endereço</button>
                            </div>
                        </div>

                    </div>
                </>
            )
            }

            {validateAddress(addressSelected) && !editMode && <ShippingCheckout cep={formAddress.zip} />}

            <div className="flex justify-end">
                <button className={`bg-green-600 hover:bg-green-700 cursor-pointer text-white py-3 px-6 font-semibold transition-colors `}

                    onClick={() => isFormValid() && onCanProgress(true)}>
                    Avançar
                </button>
            </div>
            {searchingZip && <div className="loading-overlay">Buscando CEP...</div>}
        </>
    );
};

export default StepAddress;
