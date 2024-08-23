import { TaskAction } from '@actions/taskAction';
import { TaskState } from '@models/taskModel';

// reducer function for task
export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, ...action.payload }
                        : task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(
                    task => task.id !== action.payload.id
                ),
            };
        case 'ADD_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    action.payload.taskId === task.id
                        ? {
                              ...task,
                              subTasks: [
                                  ...(task.subTasks ?? []),
                                  action.payload.subTask,
                              ],
                          }
                        : task
                ),
            };
        case 'UPDATE_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    action.payload.taskId === task.id
                        ? {
                              ...task,
                              subTasks: (task.subTasks ?? []).map(subTask =>
                                  subTask.id === action.payload.subTask.id
                                      ? {
                                            ...subTask,
                                            ...action.payload.subTask,
                                        }
                                      : subTask
                              ),
                          }
                        : task
                ),
            };
        case 'DELETE_SUBTASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    action.payload.taskId === task.id
                        ? {
                              ...task,
                              subTasks: (task.subTasks ?? []).filter(
                                  subTask =>
                                      subTask.id !== action.payload.subTaskId
                              ),
                          }
                        : task
                ),
            };
        default:
            return state;
    }
};
