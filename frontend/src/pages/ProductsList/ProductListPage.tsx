import Navbar from "../../components/Home/Navbar";
import Filters from "../../components/ProductsList/Filters";
import { products } from "../../types/Products";
import { useNavigate } from "react-router-dom";
const ProductsList: React.FC = () => {

    const navigate = useNavigate();
    const handleProductClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="min-h-screen bg-zinc-950">
            <Navbar />
            <div className="container mx-auto  flex py-6 ">
                <Filters />

                <div className="w-3/4">
                    <h2 className="text-2xl font-bold text-white mb-4">Produtos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 cursor-pointer overflow-hidden  shadow-xl transition-all duration-300 hover:border-green-300 hover:border hover:scale-105"
                                onClick={() => handleProductClick(product.id)}
                            >

                                <div className="relative pt-[100%] bg-gray-200">
                                    <img
                                        src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                        alt="Raquete Pro Carbon"
                                        className="absolute top-0 left-0 w-full h-full object-contain object-center"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                                    <p className="text-green-400 text-lg font-semibold mb-2">R$ {product.price}</p>
                                    <p className="text-gray-300 text-sm">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;