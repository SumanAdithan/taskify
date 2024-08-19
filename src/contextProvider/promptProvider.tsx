import { PromptContext } from '@/context/promptContext';
import { FC, ReactNode, useState } from 'react';

interface PromptProviderProps {
    children: ReactNode;
}

export const PromptProvider: FC<PromptProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePrompt = (value?: boolean) => {
        if (value === undefined) {
            setIsOpen(prev => !prev);
        } else {
            setIsOpen(value);
        }
    };

    return (
        <PromptContext.Provider value={{ isOpen, togglePrompt }}>
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;
