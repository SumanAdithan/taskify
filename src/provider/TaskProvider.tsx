import { FC, ReactNode, Reducer, useReducer } from 'react';
import { taskReducer } from '@reducer/taskReducer';
import { TaskState } from '@models/taskModel';
import { TaskContext } from '@context/taskContext';
import { TaskAction } from '@actions/taskAction';

// initial state for task
const initialState: TaskState = {
    tasks: [],
};

// interface for task provider props
interface taskProviderProps {
    children: ReactNode;
}

// task provider component for task context provider
const TaskProvider: FC<taskProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<TaskState, TaskAction>>(
        taskReducer,
        initialState
    );

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
