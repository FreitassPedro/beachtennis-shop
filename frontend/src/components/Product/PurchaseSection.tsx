
import React from 'react';

interface PurchaseSectionProps {
    onAddToCart: () => void;
}

const PurchaseSection: React.FC<PurchaseSectionProps> = ({ onAddToCart }) => {
    return (
        <>
            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
                <button className="bg-green-600 hover:bg-green-700 text-white py-3 cursor-pointer px-6  font-semibold transition-colors">
                    Comprar agora
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700  text-white  py-3 px-6 cursor-pointer font-semibold flex items-center justify-center gap-2 transition-colors"
                    onClick={onAddToCart}
                >
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
        </>

    )
};

export default PurchaseSection;