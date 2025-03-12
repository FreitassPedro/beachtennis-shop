
export const Footer = () => {
    return (
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
    )
}