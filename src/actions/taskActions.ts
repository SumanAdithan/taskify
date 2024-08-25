import { Task, SubTask, TaskState } from '@models';

// Union type representing all possible actions for the task reducer
export type TaskAction =
    // Action to add a new task
    | { type: 'ADD_TASK'; payload: Task }

    // Action to update an existing task's name
    | { type: 'UPDATE_TASK'; payload: { id: string; name: string } }

    // Action to delete a task by its ID
    | { type: 'DELETE_TASK'; payload: { id: string } }

    // Action to add a subtask to a specific task
    | {
          type: 'ADD_SUBTASK';
          payload: { subTask: SubTask; taskId: string | null };
      }

    // Action to update an existing subtask's properties
    | {
          type: 'UPDATE_SUBTASK';
          payload: {
              subTask: { id: string; name?: string; isDone?: boolean }; // Corrected 'isdone' to 'isDone'
              taskId: string | null;
          };
      }

    // Action to delete a subtask from a specific task
    | {
          type: 'DELETE_SUBTASK';
          payload: { subTaskId: string; taskId: string | undefined };
      }

    // Action to toggle the completion status of a subtask
    | {
          type: 'TOGGLE_SUBTASK_COMPLETION';
          payload: { subTaskId: string; taskId: string | null };
      }

    // Action to set the initial state of tasks
    | {
          type: 'SET_INITIAL_STATE';
          payload: TaskState;
      }

    // Action to reorder subtasks within a specific task
    | {
          type: 'REORDER_SUBTASKS';
          payload: { subTasks: SubTask[]; taskId: string | null };
      };
