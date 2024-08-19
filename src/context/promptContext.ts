import { createContext } from 'react';

export interface promptContextProps {
    isOpen: boolean;
    togglePrompt: (value?: boolean) => void;
}

export const PromptContext = createContext<promptContextProps | undefined>(
    undefined
);
