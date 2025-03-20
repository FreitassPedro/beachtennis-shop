import { Footer } from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import React, { useContext } from "react";
import SimilarProducts from "../../components/Product/SimilarProducts";
import { Product, products } from "../../types/Products";
import { Link, useParams } from "react-router-dom";
import DescriptionProduct from "../../components/Product/DescriptionProduct";
import SummaryProduct from "../../components/Product/SummaryProduct";
import PurchaseSection from "../../components/Product/PurchaseSection";
import ImagesProduct from "../../components/Product/ImagesProduct";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { ItemCart } from "../../types/Products";

const ProductPage: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const productId = id ? parseInt(id, 10) : undefined;

    const { addToCart } = useContext(CartContext);

    const product: Product | undefined = products.find((p) => p.id === productId);

    const handleAddToCart = () => {
        if (!product) return;
        const item: ItemCart = {
            id: product?.id,
            name: product?.name,
            price: product?.price,
            image: product?.image[0],
            quantity: 1,
            code: "",
            originalPrice: 0
        }

        addToCart(item);
    }


    if (!product) {
        return (
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4 flex flex-col space-y-10 items-center justify-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Produto não encontrado</h1>
                    <p className="text-gray-400">O produto que você está procurando não foi encontrado.</p>
                    <Link to="/" className="bg-green-400 p-5 text-gray-300 font-semibold text-lg hover:underline">Voltar para a página inicial</Link>
                </div>
            </div >
        )
    }
    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4">
                    {/* Breadcrumb */}
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="hover:text-green-400 cursor-pointer"> Raquetes</span> &gt;
                        <span className="text-green-400"> {product.category}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        {/* Product Images Section - Redesigned for responsiveness */}
                        <ImagesProduct
                            product={product}
                        />

                        {/* Product Details Section */}
                        <div className="flex flex-col gap-6 w-full md:w-1/2">
                            <SummaryProduct
                                product={product}
                            />

                            <PurchaseSection
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>

                    <DescriptionProduct
                        product={product}
                    />

                    {/* Specifications */}
                    <div className="bg-zinc-900  p-6 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Especificações Técnicas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Material:</span>
                                <span className="text-white float-right">Carbono</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Peso:</span>
                                <span className="text-white float-right">330g</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Comprimento:</span>
                                <span className="text-white float-right">50cm</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Tamanho da cabeça:</span>
                                <span className="text-white float-right">120cm²</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Perfil:</span>
                                <span className="text-white float-right">20mm</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Núcleo:</span>
                                <span className="text-white float-right">EVA de alta densidade</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Marca:</span>
                                <span className="text-white float-right">Pro Beach</span>
                            </div>
                            <div className="border-b border-zinc-800 py-2">
                                <span className="text-gray-400">Origem:</span>
                                <span className="text-white float-right">Itália</span>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <SimilarProducts />
                </div>
            </div >

            <Footer />
        </>
    );
};

export default ProductPage;