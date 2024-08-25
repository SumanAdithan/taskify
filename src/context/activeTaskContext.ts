import { createContext } from 'react';

// Interface defining the structure of the active task context
export interface ActiveTaskContextProps {
    isActive: boolean; // Indicates if the task is currently active
    toggleActive: (value?: boolean) => void; // Function to toggle the active status of the task
}

// Creating the context for active task with an initial undefined value
// This ensures that components using this context are properly wrapped with a provider
export const ActiveTaskContext = createContext<ActiveTaskContextProps | undefined>(undefined);
