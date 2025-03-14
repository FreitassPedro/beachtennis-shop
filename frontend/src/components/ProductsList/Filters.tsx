import { useState } from "react";

const Filters = () => {
    const [isOpenBrandFilter, setIsOpenBrandFilter] = useState(false);
    const [isOpenProductFilter, setIsOpenProductFilter] = useState(false);

    return (
        <div className="w-1/4 mr-6">
            <h2 className="text-2xl font-bold text-white mb-4">Filtros</h2>
            <div className="">
                {/* Ordenar por */}
                <div className="bg-zinc-900  p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Ordenar por</h3>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="radio" id="relevance" name="sort" className="mr-2" />
                            <label htmlFor="relevance" className="text-gray-300">Relevância</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="price-asc" name="sort" className="mr-2" />
                            <label htmlFor="price-asc" className="text-gray-300">Menor preço</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="price-desc" name="sort" className="mr-2" />
                            <label htmlFor="price-desc" className="text-gray-300">Maior preço</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="newest" name="sort" className="mr-2" />
                            <label htmlFor="newest" className="text-gray-300">Mais recentes</label>
                        </div>
                    </div>
                </div>

                {/* Marcas */}
                <div className="bg-zinc-900 p-4">
                    <button
                        className="flex justify-between items-center w-full text-lg font-semibold text-white mb-3"
                        onClick={() => setIsOpenBrandFilter(!isOpenBrandFilter)}
                    >
                        <span>Marcas</span>
                        <span>{isOpenBrandFilter ? '−' : '+'}</span>
                    </button>

                    {isOpenBrandFilter && (
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" id="adidas" className="mr-2" />
                                <label htmlFor="adidas" className="text-gray-300">Adidas</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="wilson" className="mr-2" />
                                <label htmlFor="wilson" className="text-gray-300">Wilson</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="babolat" className="mr-2" />
                                <label htmlFor="babolat" className="text-gray-300">Babolat</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="head" className="mr-2" />
                                <label htmlFor="head" className="text-gray-300">Head</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="quicksand" className="mr-2" />
                                <label htmlFor="quicksand" className="text-gray-300">Quicksand</label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tipo de Produto */}
                <div className="bg-zinc-900  p-4">
                    <button
                        className="flex justify-between items-center w-full text-lg font-semibold text-white mb-3"
                        onClick={() => setIsOpenProductFilter(!isOpenProductFilter)}
                    >
                        <span>Tipo de Produto</span>
                        <span>{isOpenProductFilter ? '−' : '+'}</span>
                    </button>

                    {isOpenProductFilter && (
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" id="racket" className="mr-2" />
                                <label htmlFor="racket" className="text-gray-300">Raquetes</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="balls" className="mr-2" />
                                <label htmlFor="balls" className="text-gray-300">Bolas</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="accessories" className="mr-2" />
                                <label htmlFor="accessories" className="text-gray-300">Acessórios</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="clothes" className="mr-2" />
                                <label htmlFor="clothes" className="text-gray-300">Vestuário</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="shoes" className="mr-2" />
                                <label htmlFor="shoes" className="text-gray-300">Calçados</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-wrap gap-3 mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                    Aplicar Filtros
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded">
                    Limpar Filtros
                </button>
            </div>
        </div>
    )
};

export default Filters;