import { TaskAction } from '../actions/taskAction';
import { TaskState } from '../models/taskModel';

// reducer function for task
export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('hello world');
            return state;
        default:
            return state;
    }
};
