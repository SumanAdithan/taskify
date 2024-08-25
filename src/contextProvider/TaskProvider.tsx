import { FC, ReactNode, Reducer, useReducer } from 'react';
import { taskReducer } from '@reducer';
import { TaskState } from '@models';
import { TaskContext } from '@context';
import { TaskAction } from '@actions';

// Initial state for the task context
const initialState: TaskState = {
    tasks: [], // Start with an empty list of tasks
};

// Interface for the TaskProvider props
interface TaskProviderProps {
    children: ReactNode; // ReactNode type for children elements
}

// TaskProvider component to manage task state and dispatch actions
const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
    // useReducer hook to manage the task state and dispatch actions
    const [state, dispatch] = useReducer<Reducer<TaskState, TaskAction>>(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children} {/* Render children within the context provider */}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
