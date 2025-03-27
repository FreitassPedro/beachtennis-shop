
interface StepBarProgressProps {
    currentStep: number;
}
const StepBarProgress = ({ currentStep }: StepBarProgressProps) => {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto mb-6">
                <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-green-400' : 'text-gray-500'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                        <span className="text-white font-bold">1</span>
                    </div>
                    <span className="text-sm">Endereço</span>
                </div>
                <div className={`h-1 flex-grow mx-2 mb-6 ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'} transition-colors duration-600`}></div>
                <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-green-400' : 'text-gray-500'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                        <span className="text-white font-bold">2</span>
                    </div>
                    <span className="text-sm">Pagamento</span>
                </div>
                <div className={`h-1 flex-grow mx-2 mb-6 ${currentStep >= 3 ? 'bg-green-600' : 'bg-zinc-700'}  transition-colors duration-600`}></div>
                <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-green-400' : 'text-gray-500'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep >= 3 ? 'bg-green-600' : 'bg-zinc-700'} mb-2`}>
                        <span className="text-white font-bold">3</span>
                    </div>
                    <span className="text-sm">Confirmação</span>
                </div>
            </div>
        </div>

    )
};

export default StepBarProgress