import { createContext, Dispatch } from 'react';
import { TaskAction } from '@actions/taskAction';
import { TaskState } from '@models/taskModel';

// interface for task context props
export interface taskContextProps {
    state: TaskState;
    dispatch: Dispatch<TaskAction>;
}

// context api for task
export const TaskContext = createContext<taskContextProps | undefined>(
    undefined
);
