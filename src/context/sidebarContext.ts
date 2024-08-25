import { createContext } from 'react';

// Interface defining the structure of the Sidebar context
export interface SidebarContextProps {
    isOpen: boolean; // Indicates whether the sidebar is currently open or closed
    toggleSidebar: (value?: boolean) => void; // Function to toggle the sidebar state
}

// Creating the Sidebar context with an initial undefined value
// Ensures that components using this context are wrapped with a provider
export const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);
