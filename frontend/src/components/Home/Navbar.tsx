
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className='sticky top-0 left-0 p-5 bg-black w-full z-1000 justify-center lg:justify-between flex  text-white'>            <a href="" className='lg:block  items-center justify-center lg:justify-between flex-wrap'>
            <Link to="/">
                <h1 className='text-4xl font-bold'>ASCHADE</h1>
            </Link>
        </a>
            <div className='lg:flex hidden gap-6 items-end'>
                <a href="" className='text-2xl'>Raquetes</a>
                <a href="" className='text-2xl'>Bolas</a>
                <a href="" className='text-2xl'>Redes</a>
                <a href="" className='text-2xl'>Acessórios</a>
            </div>
            <div className='gap-6 items-end hidden lg:flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M23.707 22.293L17.7415 16.3275C19.152 14.6035 20 12.401 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C12.401 20 14.6035 19.152 16.3275 17.7415L22.293 23.707L23.707 22.293ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" clipRule="evenodd" />
                </svg>
                <Link to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 36 36" fill="currentColor">
                        <path fillRule="evenodd" d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z" clipRule="evenodd" />
                    </svg>
                </Link>

                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="2 2 20.00 20.00" fill="none" stroke="#ffffff" ><g id="SVGRepo_bgCarrier" stroke-width="0">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50035 9.3C5.487 8.31988 6.27024 7.51426 7.25035 7.5H17.7503C18.7305 7.51426 19.5137 8.31988 19.5004 9.3V17.4C19.5276 19.3605 17.9608 20.972 16.0004 21H9.00035C7.03989 20.972 5.4731 19.3605 5.50035 17.4V9.3Z" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.0004 10.2V6.6C16.0276 4.63953 14.4608 3.02797 12.5004 3C10.5399 3.02797 8.9731 4.63953 9.00035 6.6V10.2" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                    </svg>
                </Link>
            </div>
            <div className="flex lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M23.707 22.293L17.7415 16.3275C19.152 14.6035 20 12.401 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C12.401 20 14.6035 19.152 16.3275 17.7415L22.293 23.707L23.707 22.293ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" clipRule="evenodd" />
                </svg>
                <input type="text" placeholder="Buscar..." />
            </div>
        </nav>
    )
};
export default Navbar;