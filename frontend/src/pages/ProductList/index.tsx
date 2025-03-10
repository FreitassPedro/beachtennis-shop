import Navbar from "../Home/Navbar";

const ProductList: React.FC = () => {

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Product Card */}
                    <div className="bg-zinc-900 cursor-pointer overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1 ">
                        <div className="h-96 overflow-hidden ">
                            <img
                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                alt="Raquete Pro Carbon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Raquete Pro Carbon</h3>
                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 599,90</p>
                            <p className="text-gray-300 text-sm">
                                Carbono de alta performance, peso balanceado e grip ergonômico
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-900 cursor-pointer overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                        <div className="h-96 overflow-hidden ">
                            <img
                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                alt="Raquete Pro Carbon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Raquete Pro Carbon</h3>
                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 599,90</p>
                            <p className="text-gray-300 text-sm">
                                Carbono de alta performance, peso balanceado e grip ergonômico
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-900 cursor-pointer overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                        <div className="h-96 overflow-hidden ">
                            <img
                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                alt="Raquete Pro Carbon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Raquete Pro Carbon</h3>
                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 599,90</p>
                            <p className="text-gray-300 text-sm">
                                Carbono de alta performance, peso balanceado e grip ergonômico
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-900 cursor-pointer overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                        <div className="h-96 overflow-hidden ">
                            <img
                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                alt="Raquete Pro Carbon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Raquete Pro Carbon</h3>
                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 599,90</p>
                            <p className="text-gray-300 text-sm">
                                Carbono de alta performance, peso balanceado e grip ergonômico
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;