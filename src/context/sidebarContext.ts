import { createContext } from 'react';

export interface sidebarContextProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<sidebarContextProps | undefined>(
    undefined
);
