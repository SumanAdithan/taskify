import { useContext } from 'react';
import { SidebarContext, sidebarContextProps } from '@/context/sidebarContext';

export const useSidebarContext = (): sidebarContextProps => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};
