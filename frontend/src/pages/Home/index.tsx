import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cdn.prod.website-files.com/5e175f9410a1f54621f9f6c2/61f92fee53e50c9d3693c37e_beachtennis%20klo%2087.jpg"
                        alt="Beach Tennis Players at Sunset"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        <span className="block">Beach Tennis Elite</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-10">
                        Equipamentos premium para o seu melhor jogo
                    </p>
                    <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg">
                        Explorar Produtos
                    </button>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        Categorias
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

            {/* Featured Products Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        Produtos Destaque
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Product 1 */}
                        <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Raquete Profissional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-green-400 text-black font-medium rounded-full mb-4">Destaque</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Raquete Pro Carbon X9</h3>
                                <p className="text-gray-300 mb-6">Raquete profissional com tecnologia anti-vibração e peso balanceado</p>
                                <button className="mt-4 bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-colors">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Kit Iniciante Beach Tennis"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-green-400 text-black font-medium rounded-full mb-4">Kit Completo</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Kit Iniciante Elite</h3>
                                <p className="text-gray-300 mb-6">Kit completo com duas raquetes, bolinhas e bolsa para transporte</p>
                                <button className="mt-4 bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-colors">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/106583221/pt/foto/raquete-de-pingue-pongue-na-praia-de-areia.jpg?s=612x612&w=0&k=20&c=HAzlQ4k5Pc9E0W_1axuRA_he2wJoc9kA9WUDsVxoaiw="
                                    alt="Bolsa para Raquetes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-green-400 text-black font-medium rounded-full mb-4">Lançamento</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Bolsa Premium Pro Tour</h3>
                                <p className="text-gray-300 mb-6">Bolsa térmica com compartimentos especiais para até 3 raquetes</p>
                                <button className="mt-4 bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-colors">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-green-800 to-indigo-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Fique por dentro das novidades
                    </h2>
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-grow py-3 px-4 rounded-md focus:outline-none"
                            />
                            <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-colors">
                                Inscrever
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Beach Tennis Elite</h3>
                            <p className="text-gray-400">
                                Equipamentos de alta qualidade para o melhor do seu jogo.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Raquetes</li>
                                <li>Bolinhas</li>
                                <li>Redes</li>
                                <li>Acessórios</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Informações</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Sobre nós</li>
                                <li>Política de entrega</li>
                                <li>Termos e condições</li>
                                <li>Política de privacidade</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contato</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>contato@beachtenniselite.com.br</li>
                                <li>(11) 99999-9999</li>
                                <li>São Paulo, SP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>© 2025 Beach Tennis Elite. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;