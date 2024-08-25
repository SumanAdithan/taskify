import { useContext } from 'react';
import { PromptContext, PromptContextProps } from '@context';

/**
 * Custom hook to access the PromptContext.
 * Throws an error if used outside of a PromptProvider.
 *
 * @returns {PromptContextProps} The context value.
 * @throws {Error} If the context is undefined.
 */
export const usePromptContext = (): PromptContextProps => {
    // Access the PromptContext using useContext hook
    const context = useContext(PromptContext);

    // Check if context is undefined, indicating the hook is used outside of the Provider
    if (!context) {
        throw new Error('usePromptContext must be used within a PromptProvider');
    }

    // Return the context value
    return context;
};
