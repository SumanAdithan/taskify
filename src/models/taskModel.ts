// Interface representing a subtask within a task
export interface SubTask {
    id: string; // Unique identifier for the subtask
    name: string; // Name or description of the subtask
    isDone: boolean; // Status indicating if the subtask is completed
}

// Interface representing a main task
export interface Task {
    id: string; // Unique identifier for the task
    name: string; // Name or description of the task
    isDone: boolean; // Status indicating if the task is completed
    subTasks?: SubTask[]; // Optional list of subtasks associated with the task
}

// Interface representing the state structure for managing tasks
export interface TaskState {
    tasks: Task[]; // Array of tasks, representing the current state of tasks
}
