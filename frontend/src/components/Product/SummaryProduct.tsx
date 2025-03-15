import { Product } from "../../types/Products";

interface SummaryProductProps {
    product: Product;
}

const SummaryProduct: React.FC<SummaryProductProps> = ({ product }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.title}</h1>
            <p className="text-gray-400 mb-3">Código: {product.id}</p>

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
                <span className="text-gray-400 line-through text-lg mr-2">{`R$ ${product.price}`}</span>
                <span className="text-green-400 text-3xl font-bold">{`R$ ${(product.price / 0.95).toFixed(2)}`}</span>
                <p className="text-gray-400 text-sm mt-1">{`ou 10x de R$ ${(product.price / 10).toFixed(2)} `} sem juros</p>
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
    );
};

export default SummaryProduct;