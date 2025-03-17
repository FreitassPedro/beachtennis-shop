import React from 'react';
import { Footer } from '../../components/Home/Footer';
import Navbar from '../../components/Home/Navbar';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cdn.prod.website-files.com/5e175f9410a1f54621f9f6c2/61f92fee53e50c9d3693c37e_beachtennis%20klo%2087.jpg"
                        alt="Beach Tennis Players at Sunset"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
                </div>

                <div className="container mx-5 px-6 relative z-10 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                        <span className="block">Chade Beach Tennis</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-10">
                        Experiencie o melhor para o seu melhor jogo
                    </p>
                    <Link to={"/products"} className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg">
                        Explorar Produtos
                    </Link>
                </div>
            </section>

            <section className='bg-neutral-950 text-white py-20'>
                <div className='container px-6 mx-auto'>
                    <h2 className='text-3xl font-bold text-center text-white mb-6'>Explore seu estilo</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {/* Card 1 */}
                        <div className='rounded-xl shadow-xl overflow-hidden hover:scale-102 flex flex-col h-100'>
                            <div className='flex-grow overflow-hidden relative'>
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute flex items-center text-center justify-center inset-0 bg-gray-900/90 p-10 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <p className='text-white font-semibold text-2xl'>Foco em conforto e qualidade</p>
                                </div>
                            </div>
                            <div className='bg-zinc-900 p-4'>
                                <h3 className='text-2xl text-green-400 font-semibold'>Fibra de Vidro</h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='rounded-xl shadow-xl overflow-hidden hover:scale-102 flex flex-col h-100'>
                            <div className='flex-grow overflow-hidden relative'>
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute flex items-center text-center justify-center inset-0 bg-gray-900/90 p-10 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <p className='text-white font-semibold text-2xl'>Alta performace e desempenho</p>
                                </div>
                            </div>
                            <div className='bg-zinc-900 p-4'>
                                <h3 className='text-2xl text-green-400 font-semibold'>Fibra de Carbono</h3>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className='rounded-xl shadow-xl overflow-hidden hover:scale-102 flex flex-col h-100'>
                            <div className='flex-grow overflow-hidden relative'>
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute flex items-center text-center justify-center inset-0 bg-gray-900/90 p-10 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <p className='text-white font-semibold text-2xl'>Equilíbrio conforto e desempenho</p>
                                </div>
                            </div>
                            <div className='bg-zinc-900 p-4'>
                                <h3 className='text-2xl text-green-400 font-semibold'>Híbrido</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /* Imagem promocional */}
            <div className='h-96 relative flex items-center  overflow-hidden shadow-xl'>
                <div className="absolute z-0 inset-0  ">
                    <img
                        src="https://www.sescpr.com.br/wp-content/uploads/2023/04/beach-tennis-2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60"></div>

                </div>
                <div className='z-10 p-30 '>
                    <h1 className='font-bold text-4xl text-white '>Todo desafio é um desafio </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10">
                        Experiencie o melhor para o seu melhor jogo
                    </p>
                </div>
            </div>


            {/* Seção de Produtos Em Destaque*/}
            <section className="py-12 bg-green-900  text-white" style={{
                background: "radial-gradient(circle, rgba(3,73,12,0.8855917366946778) 0%, rgba(7,47,8,1) 100%"
            }}>
                <section>
                    <div className="container mx-auto px-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
                            Em Destaque
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {/* Produto 1 */}
                            <div className="bg-zinc-900  overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                                <div className="h-64 overflow-hidden ">
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
                                    <button className="mt-4 w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors">
                                        Comprar
                                    </button>
                                </div>
                            </div>

                            {/* Produto 2 */}
                            <div className="bg-zinc-900  overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                        alt="Bolsa Pro Tour"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Bolsa Pro Tour</h3>
                                    <p className="text-green-400 text-lg font-semibold mb-2">R$ 249,90</p>
                                    <p className="text-gray-300 text-sm">
                                        Bolsa térmica com compartimentos para 3  raquetes e acessórios
                                    </p>
                                    <button className="mt-4 w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors">
                                        Comprar
                                    </button>
                                </div>
                            </div>

                            {/* Produto 3 */}
                            <div className="bg-zinc-900  overflow-hidden shadow-xl transition-transform hover:border-green-300 hover:border-1">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                        alt="Kit Bolinhas Pro"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Kit Bolinhas Pro</h3>
                                    <p className="text-green-400 text-lg font-semibold mb-2">R$ 79,90</p>
                                    <p className="text-gray-300 text-sm">
                                        Kit com 6 bolinhas oficiais, alta durabilidade e bounce consistente
                                    </p>
                                    <button className="mt-4 w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors">
                                        Comprar
                                    </button>
                                </div>
                            </div>

                            {/* Produto 4 */}
                            <div className="bg-zinc-900  overflow-hidden shadow-xl transition-transform border border-transparent hover:border-green-400 ">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                        alt="Rede Oficial"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Rede Oficial</h3>
                                    <p className="text-green-400 text-lg font-semibold mb-2">R$ 399,90</p>
                                    <p className="text-gray-300 text-sm">
                                        Rede profissional com medidas oficiais, tecido resistente à areia
                                    </p>
                                    <button className="mt-4 w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition-colors">
                                        Comprar
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/* Mais procurados */}
                <section className='py-16 '>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Os mais acessados
                        </h2>

                        <div className="relative">
                            {/* Navigation arrows */}
                            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px- z-10">
                                <button className="bg-green-400 hover:bg-green-500 text-black p-2 rounded-full shadow-lg transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="bg-green-400 hover:bg-green-500 text-black p-2 rounded-full shadow-lg transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable container */}
                            <div
                                className="overflow-x-auto [&::-webkit-scrollbar]:h-2
                                [&::-webkit-scrollbar]:bg-black [&::-webkit-scrollbar-track]:bg-gray-600 [&::-webkit-scrollbar-thumb]:bg-zinc-900 [&::-webkit-scrollback-]
                                ]">
                                <div className="flex gap-6 px-4 py-6 min-w-max">
                                    {/* Product Card 1 */}
                                    <div className="min-w-[280px] bg-zinc-900 rounded-lg overflow-hidden shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-green-400">
                                        <div className="h-64 overflow-hidden relative group">
                                            <img
                                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                                alt="Raquete Premium"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                                                    Ver detalhes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">Raquete Premium</h3>
                                                <span className="bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">TOP</span>
                                            </div>
                                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 499,90</p>
                                            <div className="flex text-yellow-400 mb-3">
                                                <span>★★★★</span><span className="text-gray-500">★</span>
                                                <span className="text-gray-400 text-sm ml-1">(42)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Card 2 */}
                                    <div className="min-w-[280px] bg-zinc-900 rounded-lg overflow-hidden shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-green-400">
                                        <div className="h-64 overflow-hidden relative group">
                                            <img
                                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                                alt="Kit Bolinhas"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                                                    Ver detalhes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">Kit Bolinhas</h3>
                                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-15%</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-green-400 text-lg font-semibold">R$ 79,90</p>
                                                <p className="text-gray-500 text-sm line-through">R$ 94,90</p>
                                            </div>
                                            <div className="flex text-yellow-400 mb-3 mt-2">
                                                <span>★★★★★</span>
                                                <span className="text-gray-400 text-sm ml-1">(67)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Card 3 */}
                                    <div className="min-w-[280px] bg-zinc-900 rounded-lg overflow-hidden shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-green-400">
                                        <div className="h-64 overflow-hidden relative group">
                                            <img
                                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                                alt="Bolsa Térmica"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                                                    Ver detalhes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">Bolsa Térmica</h3>
                                                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">NOVO</span>
                                            </div>
                                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 189,90</p>
                                            <div className="flex text-yellow-400 mb-3">
                                                <span>★★★★</span><span className="text-gray-500">★</span>
                                                <span className="text-gray-400 text-sm ml-1">(12)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Card 4 */}
                                    <div className="min-w-[280px] bg-zinc-900 rounded-lg overflow-hidden shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-green-400">
                                        <div className="h-64 overflow-hidden relative group">
                                            <img
                                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                                alt="Rede Oficial"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                                                    Ver detalhes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">Rede Oficial</h3>
                                                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>
                                            </div>
                                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 399,90</p>
                                            <div className="flex text-yellow-400 mb-3">
                                                <span>★★★★★</span>
                                                <span className="text-gray-400 text-sm ml-1">(31)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Card 5 */}
                                    <div className="min-w-[280px] bg-zinc-900 rounded-lg overflow-hidden shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-green-400">
                                        <div className="h-64 overflow-hidden relative group">
                                            <img
                                                src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/r/b/rb6gb2u06-raquete-de-beach-tennis-adidas-bt-3-0-preta-azul-e-rosa.jpg"
                                                alt="Luva Pro Grip"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                                                    Ver detalhes
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">Luva Pro Grip</h3>
                                            </div>
                                            <p className="text-green-400 text-lg font-semibold mb-2">R$ 89,90</p>
                                            <div className="flex text-yellow-400 mb-3">
                                                <span>★★★</span><span className="text-gray-500">★★</span>
                                                <span className="text-gray-400 text-sm ml-1">(18)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            { /* Imagem promocional */}
            <div className='h-125 relative flex items-center overflow-hidden shadow-xl'>
                <div className="absolute z-0 inset-0  ">
                    <img
                        src="https://thesummerhunter.com/wp-content/uploads/2021/07/beach-tennis.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70"></div>

                </div>
                <div className='z-10 p-30 '>
                    <h1 className='font-bold text-4xl text-white '>Todo desafio é um desafio </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10">
                        Experiencie o melhor para o seu melhor jogo
                    </p>
                </div>
            </div>

            {/* Categories Section */}
            <section className="py-24 bg-zinc-900 shadow-3xl">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl  md:text-5xl font-bold text-center text-white mb-16">
                        Explore por Categoria
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Category 1: Raquetes */}
                        <div className="group bg-black rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Raquetes de Beach Tennis"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8  border-t-4 border-green-400">
                                <h3 className="text-2xl font-bold text-white mb-4">Raquetes Profissionais</h3>
                                <p className="text-gray-300 mb-6">Coleção premium para todos os níveis de jogo</p>
                                <button className="text-green-400 font-medium flex items-center text-lg">
                                    Ver coleção
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Category 2: Bolinhas */}
                        <div className="group bg-black rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Bolinhas de Beach Tennis"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 bg-black border-t-4 border-green-400">
                                <h3 className="text-2xl font-bold text-white mb-4">Bolinhas Oficiais</h3>
                                <p className="text-gray-300 mb-6">Aprovadas para competições e treinamento intensivo</p>
                                <button className="text-green-400 font-medium flex items-center text-lg">
                                    Ver coleção
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Category 3: Redes */}
                        <div className="group bg-black  rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Redes de Beach Tennis"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 bg-black border-t-4 border-green-400">
                                <h3 className="text-2xl font-bold text-white mb-4">Redes e Quadras</h3>
                                <p className="text-gray-300 mb-6">Equipamentos de alta durabilidade para jogos na areia</p>
                                <button className="text-green-400 font-medium flex items-center text-lg">
                                    Ver coleção
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Category 4: Acessórios */}
                        <div className="group bg-black  rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Acessórios de Beach Tennis"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 bg-black border-t-4 border-green-400">
                                <h3 className="text-2xl font-bold text-white mb-4">Acessórios Performance</h3>
                                <p className="text-gray-300 mb-6">Complementos essenciais para melhorar o seu jogo</p>
                                <button className="text-green-400 font-medium flex  items-center text-lg">
                                    Ver coleção
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;