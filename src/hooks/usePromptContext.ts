import { useContext } from 'react';
import { PromptContext, promptContextProps } from '@/context/promptContext';

export const usePromptContext = (): promptContextProps => {
    const context = useContext(PromptContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};
