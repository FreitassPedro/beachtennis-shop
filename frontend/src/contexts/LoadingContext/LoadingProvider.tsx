import React, { useState } from 'react';
import { LoadingContext } from './LoadingContext';

interface LoadingPRoviderProps {
    children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingPRoviderProps>  = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
