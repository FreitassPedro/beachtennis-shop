
import { Product } from "../../types/Products";

interface DescriptionProductProps {
    product: Product;
}

const DescriptionProduct: React.FC<DescriptionProductProps> = ({ product }) => {
    return (
        <div className="bg-zinc-900  p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Descrição do Produto</h2>
            <div className="text-gray-300">
                <p className="mb-4">
                    {product.description.map((desc) => (
                        <p className="mb-4">
                            {desc}
                        </p>
                    ))}
                </p>

            </div>
        </div>
    );
};

export default DescriptionProduct;