import { SidebarContext } from '@context';
import { FC, ReactNode, useState } from 'react';

// Interface for the provider props
interface SidebarProviderProps {
    children: ReactNode; // ReactNode type for children elements
}

// SidebarProvider component
export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
    // State to manage the visibility of the sidebar
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the visibility of the sidebar
    const toggleSidebar = (value?: boolean) => {
        if (value === undefined) {
            // If no value is provided, toggle the state
            setIsOpen(prev => !prev);
        } else {
            // Set state to the provided value
            setIsOpen(value);
        }
    };

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children} {/* Render children within the context provider */}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
