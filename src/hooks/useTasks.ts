import { useContext } from 'react';
import { TaskContext, taskContextProps } from '../context/taskContext';

// custom hook for accessing taskContext
export const useTasks = (): taskContextProps => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};
