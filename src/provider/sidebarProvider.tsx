import { SidebarContext } from '@/context/sidebarContext';
import { FC, ReactNode, useState } from 'react';

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
