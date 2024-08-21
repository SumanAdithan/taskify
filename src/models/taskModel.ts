// interface for subTask
export interface SubTask {
    id: string;
    name: string;
    isDone: boolean;
}

// interface for task
export interface Task {
    id: string;
    name: string;
    isDone: boolean;
    subTasks?: SubTask[];
}

// interface for taskState (used for initial state in reducer, etc)
export interface TaskState {
    tasks: Task[];
}
