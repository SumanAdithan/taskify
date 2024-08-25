import { useContext } from 'react';
import { SidebarContext, SidebarContextProps } from '@context';

/**
 * Custom hook to access the SidebarContext.
 * Throws an error if used outside of a SidebarProvider.
 *
 * @returns {SidebarContextProps} The context value.
 * @throws {Error} If the context is undefined.
 */
export const useSidebarContext = (): SidebarContextProps => {
    // Access the SidebarContext using useContext hook
    const context = useContext(SidebarContext);

    // Check if context is undefined, indicating the hook is used outside of the Provider
    if (!context) {
        throw new Error('useSidebarContext must be used within a SidebarProvider');
    }

    // Return the context value
    return context;
};
