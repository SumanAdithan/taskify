import { Task, SubTask } from '@models/taskModel';

// action type for task reducer
export type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'UPDATE_TASK'; payload: { id: string; name: string } }
    | { type: 'DELETE_TASK'; payload: { id: string } }
    | {
          type: 'ADD_SUBTASK';
          payload: { subTask: SubTask; taskId: string | undefined };
      }
    | {
          type: 'UPDATE_SUBTASK';
          payload: {
              subTask: { id: string; name?: string; isdone?: string };
              taskId: string | undefined;
          };
      }
    | {
          type: 'DELETE_SUBTASK';
          payload: { subTaskId: string; taskId: string | undefined };
      };
