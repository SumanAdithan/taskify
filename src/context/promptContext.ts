import { createContext } from 'react';

// Interface defining the structure of the Prompt context
export interface PromptContextProps {
    isOpen: boolean; // Tracks whether the prompt is currently open or closed
    togglePrompt: (value?: boolean) => void; // Function to toggle the prompt state
}

// Creating the Prompt context with an initial undefined value
// This ensures that components using this context are properly wrapped with a provider
export const PromptContext = createContext<PromptContextProps | undefined>(
    undefined
);
