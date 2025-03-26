import { useLoading } from "../../contexts/LoadingContext/LoadingContext";

const Loading = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="bg-zinc-600/90 fixed inset-0 z-1000">
            <div className="bg-zinc-800 p-8 rounded-lg absolute top-1/2 left-1/2 flex flex-row gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400 animate-spin" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h1 className="text-white text-lg font-semibold">Carregando...</h1>
            </div>
        </div>
    )
}

export default Loading;
