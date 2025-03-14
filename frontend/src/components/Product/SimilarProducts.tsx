
const SimilarProducts = () => {

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-zinc-900 cursor-pointer overflow-hidden  shadow-xl transition-all duration-300 hover:border-green-300 hover:border hover:scale-105">
                        <div className="relative pt-[100%] bg-gray-200">
                            <img
                                src={`https://fastly.picsum.photos/id/${575 + item}/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A`}
                                alt={`Produto relacionado ${item}`}
                                className="absolute top-0 left-0 w-full h-full object-contain object-center"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-white mb-2">Acessório Beach Tennis {item}</h3>
                            <p className="text-green-400 text-lg font-semibold">R$ {199 + (item * 50)},90</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SimilarProducts;