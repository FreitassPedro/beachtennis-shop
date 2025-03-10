import { useState } from "react";

export const Navbar = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className='sticky top-0 left-0 p-5 bg-black w-full z-1000 justify-center md:justify-between flex  text-white'>            <a href="" className='md:block  items-center justify-center md:justify-between flex-wrap'>
            <h1 className='text-4xl font-bold'>ASCHADE</h1>
        </a>
            <div className='md:flex hidden gap-6 items-end'>
                <a href="" className='text-2xl'>Raquetes</a>
                <a href="" className='text-2xl'>Bolas</a>
                <a href="" className='text-2xl'>Redes</a>
                <a href="" className='text-2xl'>Acessórios</a>
            </div>
            <div className='gap-6 items-end hidden md:flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M23.707 22.293L17.7415 16.3275C19.152 14.6035 20 12.401 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C12.401 20 14.6035 19.152 16.3275 17.7415L22.293 23.707L23.707 22.293ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 36 36" fill="currentColor">
                    <path fillRule="evenodd" d="M9 8.52632C9 13.2272 13.038 17.0526 18 17.0526C22.962 17.0526 27 13.2272 27 8.52632C27 3.82547 22.962 0 18 0C13.038 0 9 3.82547 9 8.52632ZM34 36H36V34.1053C36 26.7935 29.718 20.8421 22 20.8421H14C6.28 20.8421 0 26.7935 0 34.1053V36H34Z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="flex md:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M23.707 22.293L17.7415 16.3275C19.152 14.6035 20 12.401 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C12.401 20 14.6035 19.152 16.3275 17.7415L22.293 23.707L23.707 22.293ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" clipRule="evenodd" />
                </svg>
                <input type="text" placeholder="Buscar..." />
            </div>
        </nav>
    )
};
export default Navbar;