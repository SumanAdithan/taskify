import { createContext } from 'react';

export interface promptContextProps {
    isActive: boolean;
    toggleActive: (value?: boolean) => void;
}

export const activeTaskContext = createContext<promptContextProps | undefined>(
    undefined
);
