import { Footer } from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import React, { useState } from "react";
import SimilarProducts from "../../components/Product/SimilarProducts";
import { product } from "../../types/Products";
interface ProductProps {
    product: ProductPage;
}


const ProductPage: React.FC<ProductProps> = ({product}) => {
    // Array of product images
    const productImages = [
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
    ];

    // State to track the selected main image
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <div className="container mx-auto py-8 px-4">
                    {/* Breadcrumb */}
                    <div className="text-gray-400 mb-6">
                        <span className="hover:text-green-400 cursor-pointer">Home</span> &gt;
                        <span className="hover:text-green-400 cursor-pointer"> Raquetes</span> &gt;
                        <span className="text-green-400"> Raquete Pro Carbon</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        {/* Product Images Section - Redesigned for responsiveness */}
                        <div className="w-full ">
                            {/* Small screens: One large image + thumbnails */}
                            <div className="block md:hidden">
                                {/* Main image */}
                                <div className="bg-gray-200 overflow-hidden mb-4 w-full aspect-square">
                                    <img
                                        src={productImages[selectedImage]}
                                        alt="Raquete Pro Carbon"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Thumbnail row */}
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {productImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`bg-gray-200  overflow-hidden min-w-16 w-16 h-16 cursor-pointer transition-all
                                                ${selectedImage === index ? 'ring-2 ring-green-500' : 'opacity-70 hover:opacity-100'}`}
                                            onClick={() => setSelectedImage(index)}
                                        >
                                            <img
                                                src={image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Medium/Large screens: 2x2 grid layout */}
                            <div className="hidden md:grid md:grid-cols-2 gap-4">
                                {productImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gray-200  overflow-hidden cursor-pointer transition-all ${index < 2 ? 'aspect-square' : 'aspect-square'}`}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                {/* If there are less than 4 images, add placeholder for grid consistency */}
                                {productImages.length < 4 && (
                                    <div className="bg-gray-200  overflow-hidden aspect-square">
                                        <img
                                            src={productImages[0]}
                                            alt="Product additional view"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="flex flex-col gap-6 w-full md:w-1/2">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Raquete Pro Carbon</h1>
                                <p className="text-gray-400 mb-3">Código: PRO-C-2025</p>

                                {/* Ratings */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-yellow-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3.75l1.875 3.8 4.2.613-3.038 2.963.719 4.188L10 13.25 6.244 15.313l.719-4.188L3.925 8.163l4.2-.613L10 3.75z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3.75l1.875 3.8 4.2.613-3.038 2.963.719 4.188L10 13.25 6.244 15.313l.719-4.188L3.925 8.163l4.2-.613L10 3.75z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3.75l1.875 3.8 4.2.613-3.038 2.963.719 4.188L10 13.25 6.244 15.313l.719-4.188L3.925 8.163l4.2-.613L10 3.75z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3.75l1.875 3.8 4.2.613-3.038 2.963.719 4.188L10 13.25 6.244 15.313l.719-4.188L3.925 8.163l4.2-.613L10 3.75z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" opacity="0.3">
                                            <path fillRule="evenodd" d="M10 3.75l1.875 3.8 4.2.613-3.038 2.963.719 4.188L10 13.25 6.244 15.313l.719-4.188L3.925 8.163l4.2-.613L10 3.75z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400">(24 avaliações)</span>
                                </div>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-gray-400 line-through text-lg mr-2">R$ 799,90</span>
                                    <span className="text-green-400 text-3xl font-bold">R$ 599,90</span>
                                    <p className="text-gray-400 text-sm mt-1">ou 10x de R$ 59,99 sem juros</p>
                                </div>

                                {/* Features */}
                                <div className="bg-zinc-900 p-4  mb-6">
                                    <h3 className="text-white font-semibold mb-2">Características:</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Carbono de alta performance</li>
                                        <li>• Peso: 330g</li>
                                        <li>• Tamanho da cabeça: 120cm²</li>
                                        <li>• Grip ergonômico</li>
                                        <li>• Ideal para jogadores intermediários e avançados</li>
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-3">
                                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6  font-semibold transition-colors">
                                    Comprar agora
                                </button>
                                <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6  font-semibold flex items-center justify-center gap-2 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Adicionar ao carrinho
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="flex flex-wrap mt-4 gap-4">
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Em estoque
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Envio em 24h
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Garantia
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rest of the content remains the same */}
                    {/* Product Description Section */}
                    <div className="bg-zinc-900  p-6 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Descrição do Produto</h2>
                        <div className="text-gray-300">
                            <p className="mb-4">
                                A Raquete Pro Carbon é o equipamento ideal para jogadores que buscam um alto desempenho nas quadras de beach tennis. Desenvolvida com tecnologia de ponta, esta raquete combina carbono de alta qualidade com um design ergonômico para proporcionar potência, controle e conforto durante as partidas.
                            </p>
                            <p className="mb-4">
                                Seu peso balanceado de 330g oferece a combinação perfeita entre estabilidade e manobrabilidade, permitindo jogadas rápidas e precisas. O núcleo em EVA de alta densidade proporciona uma excelente absorção de impacto, reduzindo o estresse no braço e no punho durante longas partidas.
                            </p>
                            <p>
                                A Raquete Pro Carbon é recomendada para jogadores de nível intermediário a avançado que buscam aprimorar seu jogo com um equipamento de alta performance.
                            </p>
                        </div>
                    </div>

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
            </div>

            <Footer />
        </>
    );
};

export default ProductPage;