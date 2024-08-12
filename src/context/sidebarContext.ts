import { createContext } from 'react';

export interface sidebarContextProps {
    isOpen: boolean;
    toggleSidebar: (value?: boolean) => void;
}

export const SidebarContext = createContext<sidebarContextProps | undefined>(
    undefined
);
