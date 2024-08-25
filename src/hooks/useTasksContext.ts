import { useContext } from 'react';
import { TaskContext, TaskContextProps } from '@context';

/**
 * Custom hook to access the TaskContext.
 * Throws an error if used outside of a TaskProvider.
 *
 * @returns {TaskContextProps} The context value.
 * @throws {Error} If the context is undefined.
 */
export const useTaskContext = (): TaskContextProps => {
    // Access the TaskContext using useContext hook
    const context = useContext(TaskContext);

    // Check if context is undefined, indicating the hook is used outside of the Provider
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }

    // Return the context value
    return context;
};
