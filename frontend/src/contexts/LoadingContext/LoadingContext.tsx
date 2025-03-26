import { createContext, useContext } from "react";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}
export const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    setIsLoading: () => { },
});

export const useLoading = () => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }

    return context;
};