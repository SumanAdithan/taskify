import { Task, SubTask, TaskState } from '@models/taskModel';

// action type for task reducer
export type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'UPDATE_TASK'; payload: { id: string; name: string } }
    | { type: 'DELETE_TASK'; payload: { id: string } }
    | {
          type: 'ADD_SUBTASK';
          payload: { subTask: SubTask; taskId: string | null };
      }
    | {
          type: 'UPDATE_SUBTASK';
          payload: {
              subTask: { id: string; name?: string; isdone?: null };
              taskId: string | null;
          };
      }
    | {
          type: 'DELETE_SUBTASK';
          payload: { subTaskId: string; taskId: string | undefined };
      }
    | {
          type: 'TOGGLE_SUBTASK_COMPLETION';
          payload: { subTaskId: string; taskId: string | null };
      }
    | {
          type: 'SET_INITIAL_STATE';
          payload: TaskState;
      }
    | {
          type: 'REORDER_SUBTASKS';
          payload: { subTasks: SubTask[]; taskId: string | null };
      };
