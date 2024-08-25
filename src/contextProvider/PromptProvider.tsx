import { PromptContext } from '@context';
import { FC, ReactNode, useState } from 'react';

// Interface for the provider props
interface PromptProviderProps {
    children: ReactNode; // ReactNode type for children elements
}

// PromptProvider component
export const PromptProvider: FC<PromptProviderProps> = ({ children }) => {
    // State to manage the visibility of the prompt
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the visibility of the prompt
    const togglePrompt = (value?: boolean) => {
        if (value === undefined) {
            // If no value is provided, toggle the state
            setIsOpen(prev => !prev);
        } else {
            // Set state to the provided value
            setIsOpen(value);
        }
    };

    return (
        <PromptContext.Provider value={{ isOpen, togglePrompt }}>
            {children} {/* Render children within the context provider */}
        </PromptContext.Provider>
    );
};

export default PromptProvider;
