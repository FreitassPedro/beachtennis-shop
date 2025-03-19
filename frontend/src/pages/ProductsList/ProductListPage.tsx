import React, { useState } from "react";
import Navbar from "../../components/Home/Navbar";
import Filters from "../../components/ProductsList/Filters";
import { Product, products as productsMock } from "../../types/Products";
import { useNavigate, useParams } from "react-router-dom";

const ProductsList: React.FC = () => {
    const { query, category } = useParams<{ query?: string, category?: string }>();

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>(query || category || "");
    const [products, setProducts] = useState<Product[]>([]);
    const imagesPath = 'http://localhost:8080/';


    React.useEffect(() => {
        if (searchTerm) {
            // Busca por pesquisa
            const filtered = productsMock.filter((p) =>
                p.category.some((catg) => catg.toLowerCase() === searchTerm.toLowerCase())
            );
            setProducts(filtered.length > 0 ? filtered : productsMock);
        }
        else {
            setProducts(productsMock);
        }
        console.log("Query: ", searchTerm);
    }, [query, category]);


    const handleProductClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="min-h-screen bg-zinc-950 ">
            <Navbar />

            <div className="p-2 bg-zinc-900 border-b border-zinc-800">
                <span className="text-white">Resultados da pesquisa:
                    <span className="text-green-200"> {searchTerm}</span>
                </span>
            </div>
            <div className="container mx-auto grid lg:grid-cols-4 py-6 ">
                <Filters />

                <div className="lg:col-span-3">
                    <h2 className="text-2xl font-bold text-white mb-4">Produtos</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 cursor-pointer overflow-hidden  shadow-xl transition-all duration-300 hover:border-green-300 hover:border hover:scale-110 hover:z-10"
                                onClick={() => handleProductClick(product.id)}
                            >

                                <div className="relative pt-[100%] bg-gray-200">
                                    <img
                                        src={`${imagesPath}${product.id}/${product.id} (1).webp`}
                                        alt="Raquete Pro Carbon"
                                        className="absolute top-0 left-0 w-full h-full object-contain object-center"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-green-400 text-lg font-semibold mb-2">R$ {product.price}</p>
                                    <p className="text-gray-300 text-sm">
                                        {product.summary}
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