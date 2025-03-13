
const CouponCart = () => {
    return (
        <div className="bg-zinc-900 p-6 rounded-lg w-full">
            <h2 className="text-white text-lg" >Aplicar código promocional</h2>
            <div className="flex w-full gap-2">
                <input type="text "
                    placeholder="Digite o cupom"
                    className="bg-zinc-800 w-full text-white p-2 focus:ring-1 focus:outline-none focus:ring-green-500"
                />
                <button className="bg-green-600 hover:bg-green-700 transition-colors font-semibold py-3 px-6">
                    Aplicar
                </button>
            </div>
        </div>
    )
}

export default CouponCart;