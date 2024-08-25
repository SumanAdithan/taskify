import { createContext, Dispatch } from 'react';
import { TaskAction } from '@actions';
import { TaskState } from '@models';

// Interface for the shape of the Task context value
export interface TaskContextProps {
    state: TaskState; // The current state of tasks
    dispatch: Dispatch<TaskAction>; // The dispatch function for task actions
}

// Creating the Task context
// Initialized with undefined to ensure the provider must wrap the components using this context
export const TaskContext = createContext<TaskContextProps | undefined>(undefined);
