import { Task } from '@models/taskModel';

// action type for task reducer
export type TaskAction =
    | {
          type: 'ADD_TASK';
          payload: Task;
      }
    | { type: 'console'; payload: any };
