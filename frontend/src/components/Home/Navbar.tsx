import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de busca aqui
    console.log("Pesquisando:", searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Controla a visibilidade do navbar ao rolar
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolando para baixo & além de 100px - esconde o navbar
        setVisible(false);
        if (isMenuOpen) toggleMenu();
      } else {
        // Rolando para cima ou no topo - mostra o navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Sempre que o usuário rolar a página, chama a função controlNavbar
    window.addEventListener('scroll', controlNavbar);

    // Executado antes da próxima execução e ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 left-0 p-4 bg-black w-full z-50 shadow-lg transition-transform duration-310 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl font-bold text-white tracking-wider">
            ASCHADE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/raquetes" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
            Raquetes
          </Link>
          <Link to="/bolas" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
            Bolas
          </Link>
          <Link to="/redes" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
            Redes
          </Link>
          <Link to="/acessorios" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
            Acessórios
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 pl-4 pr-10 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 w-64"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </form>

          {/* User Menu */}
          <div className="relative group">
            <Link to="/login" className="text-white hover:text-green-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/account" className="block px-4 py-2 text-white hover:bg-gray-800">
                Minha Conta
              </Link>
              <Link to="/pedidos" className="block px-4 py-2 text-white hover:bg-gray-800">
                Pedidos
              </Link>
              <Link to="/dados" className="block px-4 py-2 text-white hover:bg-gray-800">
                Dados
              </Link>
              <Link to="/lista-de-desejo" className="block px-4 py-2 text-white hover:bg-gray-800">
                Lista de Desejo
              </Link>
              <Link to="/fale-conosco" className="block px-4 py-2 text-white hover:bg-gray-800">
                Fale conosco
              </Link>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="text-white hover:text-green-400 transition-colors duration-300 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </Link>
        </div>

        {/* Aparece apenas menor que lg */}
        <div className="lg:hidden flex items-center space-x-4 ">
          <Link to="/cart" className="text-white relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </Link>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
      </div>

      {/* Mobile Menu & Search */}
      {isMenuOpen && (
        <div className={`lg:hidden  pb-4 absolute left-0 w-full bg-black/96 z-60 flex-col p-6`}>
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
          <div className="flex flex-col space-y-4">
            <Link to="/raquetes" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
              Raquetes
            </Link>
            <Link to="/bolas" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
              Bolas
            </Link>
            <Link to="/redes" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
              Redes
            </Link>
            <Link to="/acessorios" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
              Acessórios
            </Link>
            <Link to="/login" className="text-white hover:text-green-400 transition-colors duration-300 text-lg font-medium">
              Minha Conta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;