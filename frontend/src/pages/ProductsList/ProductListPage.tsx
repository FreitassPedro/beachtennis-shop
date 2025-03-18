import React, { useState } from "react";
import Navbar from "../../components/Home/Navbar";
import Filters from "../../components/ProductsList/Filters";
import { Product, products as productsMock } from "../../types/Products";
import { useNavigate, useParams } from "react-router-dom";
const ProductsList: React.FC = () => {
    const { category: categoryParam } = useParams<{ category: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const imagesPath = 'http://localhost:8080/';


    /*
    React.useEffect(() => {
        fetch(`/api/category/${categoryParam}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("Erro: ", error))
    }, [categoryParam]);
    */

    React.useEffect(() => {
        if (categoryParam) {
            const filtered = productsMock.filter((p) =>
                p.category.some((catg) => catg.toLowerCase() === categoryParam.toLowerCase())
            );
            setProducts(filtered.length > 0 ? filtered : productsMock);
        }
        else setProducts(productsMock);

    }, [categoryParam]);


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
                                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
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