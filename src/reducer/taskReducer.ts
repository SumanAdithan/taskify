import { TaskAction } from '@actions';
import { TaskState } from '@models';

// Reducer function for task management
export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        // Adds a new task to the state
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        // Updates an existing task in the state
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                ),
            };

        // Deletes a task from the state
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id),
            };

        // Adds a subtask to a specific task
        case 'ADD_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    action.payload.taskId === task.id
                        ? {
                              ...task,
                              subTasks: [...(task.subTasks ?? []), action.payload.subTask],
                          }
                        : task
                ),
            };

        // Updates a specific subtask within a task
        case 'UPDATE_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    action.payload.taskId === task.id
                        ? {
                              ...task,
                              subTasks: (task.subTasks ?? []).map(subTask =>
                                  subTask.id === action.payload.subTask.id
                                      ? { ...subTask, ...action.payload.subTask }
                                      : subTask
                              ),
                          }
                        : task
                ),
            };

        // Deletes a specific subtask from a task
        case 'DELETE_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.taskId
                        ? {
                              ...task,
                              subTasks: (task.subTasks ?? []).filter(
                                  subTask => subTask.id !== action.payload.subTaskId
                              ),
                          }
                        : task
                ),
            };

        // Toggles the completion status of a specific subtask
        case 'TOGGLE_SUBTASK_COMPLETION':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.taskId
                        ? {
                              ...task,
                              subTasks: (task.subTasks ?? []).map(subTask =>
                                  subTask.id === action.payload.subTaskId
                                      ? { ...subTask, isDone: !subTask.isDone }
                                      : subTask
                              ),
                          }
                        : task
                ),
            };

        // Reorders subtasks within a specific task
        case 'REORDER_SUBTASKS': {
            const { subTasks, taskId } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === taskId
                        ? { ...task, subTasks: subTasks || [] } // Ensure subTasks is always defined
                        : task
                ),
            };
        }

        // Sets the initial state
        case 'SET_INITIAL_STATE':
            return action.payload;

        // Default case for unknown action types
        default:
            return state;
    }
};
