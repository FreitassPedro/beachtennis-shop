import { Link } from "react-router-dom";

const EmtpyCart = () => {

    return (
        <div className="bg-zinc-900 text-center p-10 mx-auto w-1/3 gap-5 flex flex-col">
            <p>Ops... parece que seu carrinho está vazio</p>
            <Link to="/products">
                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors duration-200">
                    Explorar Produtos
                </button>
            </Link>
        </div>
    )

};

export default EmtpyCart;