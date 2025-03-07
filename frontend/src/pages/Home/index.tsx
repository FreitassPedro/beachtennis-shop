import React from 'react';
import { Footer } from './Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <nav className='absolute top-0 left-0 p-6 z-10 w-full bg-none justify-center md:justify-between flex flex-wrap text-white'>
                <a href="" className='md:block hidden'>
                    <h1 className='text-4xl font-bold'>ASCHADE</h1>
                </a>
                <div className='md:flex hidden gap-6 md'>
                    <a href="" className='text-2xl'>Raquetes</a>
                    <a href="" className='text-2xl'>Bolas</a>
                    <a href="" className='text-2xl'>Redes</a>
                    <a href="" className='text-2xl'>Acessórios</a>
                </div>
                <div className='flex gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M23.707 22.293L17.7415 16.3275C19.152 14.6035 20 12.401 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C12.401 20 14.6035 19.152 16.3275 17.7415L22.293 23.707L23.707 22.293ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 36 36" fill="currentColor">
                        <path fillRule="evenodd" d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z" clipRule="evenodd" />
                    </svg>
                </div>
            </nav>
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        <span className="block">Chade Beach Tennis</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-10">
                        Experiencie o melhor para o seu melhor jogo
                    </p>
                    <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg">
                        Explorar Produtos
                    </button>
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
                </div>
                <div className='z-10 p-15 '>
                    <h1 className='font-bold text-2xl text-white '>Jogue como campeão</h1>
                </div>
            </div>


            {/* Seção de Produtos Em Destaque*/}
            <section className="py-12 bg-green-900  text-white" style={{
                background: "radial-gradient(circle, rgba(3,73,12,0.8855917366946778) 0%, rgba(7,47,8,1) 100%"

            }}>
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
                                    Bolsa térmica com compartimentos para 3 raquetes e acessórios
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
            <section className='py-12 bg-gray-800 '>
                <div className="container mx-0 px-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
                        Os mais acessados
                    </h2>

                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className='flex gap-10 overflow-x-auto px-10'>
                            {/* Produto 1 */}
                            <div className="min-w-[300px] bg-zinc-900 overflow-hidden shadow-xl transition-transform border border-transparent hover:border-green-400 ">
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
                                </div>
                            </div>

                            <div className="min-w-[300px] bg-zinc-900 overflow-hidden shadow-xl transition-transform border border-transparent hover:border-green-400 ">
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
                                </div>
                            </div>
                            <div className="min-w-[300px] bg-zinc-900 overflow-hidden shadow-xl transition-transform border border-transparent hover:border-green-400 ">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Categories Section */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        Explore por Categoria
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Category 1: Raquetes */}
                        <div className="group bg-zinc-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
                            <div className="h-96 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Raquetes de Beach Tennis"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 bg-black border-t-4 border-green-400">
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
                        <div className="group bg-zinc-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
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
                        <div className="group bg-zinc-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
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
                        <div className="group bg-zinc-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-102">
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
                                <button className="text-green-400 font-medium flex items-center text-lg">
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