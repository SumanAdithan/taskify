import { Task } from '@models/taskModel';

// action type for task reducer
export type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'UPDATE_TASK'; payload: { id: string; name: string } }
    | { type: 'DELETE_TASK'; payload: { id: string } };
