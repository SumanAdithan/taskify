import { FC, useEffect, useState, useRef } from 'react';
import { Task } from '@models';
import { useTaskContext } from '@hooks';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import { loadFromLocalStorage, saveToLocalStorage } from '@utils';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { PendingTask, CompletedTask, Prompt } from '@components';

const LOCAL_STORAGE_KEY = 'taskState';

const Home: FC = () => {
    // Context for managing task state and dispatch actions
    const { state, dispatch } = useTaskContext();

    // Local state for input and task management
    const [input, setInput] = useState('');
    const [task, setTask] = useState<Task | null>(null);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editedName, setEditedName] = useState<string>('');

    // React Router hooks
    const { id } = useParams();
    const navigate = useNavigate();

    // Ref to keep track of the current task's ID
    const currentTaskIdRef = useRef<string | null>(null);

    // Load the saved task state from local storage on component mount
    useEffect(() => {
        const savedState = loadFromLocalStorage<{ tasks: Task[] }>(LOCAL_STORAGE_KEY);
        if (savedState) {
            dispatch({ type: 'SET_INITIAL_STATE', payload: savedState });
        }
    }, [dispatch]);

    // Update the current task based on the URL parameter or select the first task
    useEffect(() => {
        if (state.tasks.length > 0) {
            if (id) {
                const foundTask = state.tasks.find((task: Task) => id === task.id);
                if (foundTask) {
                    currentTaskIdRef.current = id;
                    setTask(foundTask);
                } else {
                    navigate(`/task/${state.tasks[0].id}`);
                }
            } else {
                currentTaskIdRef.current = state.tasks[0].id;
                setTask(state.tasks[0]);
                navigate(`/task/${state.tasks[0].id}`);
            }
        }
    }, [id, state.tasks, navigate]);

    // Save the task state to local storage whenever it changes
    useEffect(() => {
        if (state && state.tasks && state.tasks.length > 0) {
            saveToLocalStorage(LOCAL_STORAGE_KEY, state);
        }
    }, [state]);

    // Add a new sub-task to the current task
    const addSubTask = () => {
        if (input && currentTaskIdRef.current) {
            dispatch({
                type: 'ADD_SUBTASK',
                payload: {
                    subTask: { id: uuidv4(), name: input, isDone: false },
                    taskId: currentTaskIdRef.current,
                },
            });
            setInput('');
        }
    };

    // Handle Enter key press to update the task
    const enterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, taskId: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateTask(taskId);
        }
    };

    // Toggle editing mode or update task name
    const handleEditClick = (taskId: string, currentName: string) => {
        if (editingTaskId === taskId) {
            updateTask(taskId);
            setEditingTaskId(null);
        } else {
            setEditingTaskId(taskId);
            setEditedName(currentName);
        }
    };

    // Update the task with the new name
    const updateTask = (taskId: string) => {
        dispatch({
            type: 'UPDATE_SUBTASK',
            payload: {
                subTask: { id: taskId, name: editedName },
                taskId: currentTaskIdRef.current!,
            },
        });
        setEditingTaskId(null);
    };

    // Delete a sub-task
    const deleteTask = (taskId: string) => {
        dispatch({
            type: 'DELETE_SUBTASK',
            payload: { subTaskId: taskId, taskId: currentTaskIdRef.current! },
        });
    };

    // Toggle the completion status of a sub-task
    const toggleCompletion = (taskId: string) => {
        dispatch({
            type: 'TOGGLE_SUBTASK_COMPLETION',
            payload: { subTaskId: taskId, taskId: currentTaskIdRef.current! },
        });
    };

    // Handle drag-and-drop reordering of sub-tasks
    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        const taskId = currentTaskIdRef.current;
        if (!taskId) return;

        const task = state.tasks.find((task: Task) => task.id === taskId);
        if (!task) return;

        const subTasks = task.subTasks || [];
        const [removed] = subTasks.splice(source.index, 1);

        const updatedSubTask = {
            ...removed,
            isDone: destination.droppableId === 'completedTasks',
        };

        subTasks.splice(destination.index, 0, updatedSubTask);

        dispatch({
            type: 'REORDER_SUBTASKS',
            payload: { subTasks, taskId },
        });
    };

    return (
        <>
            {/* Input field and button to add new sub-tasks */}
            <div className='flex justify-center mb-4'>
                <input
                    type='text'
                    placeholder='Enter a task'
                    className='p-2 bg-slate-400 placeholder-white text-white border-none outline-none rounded-md'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className='p-1 text-white bg-gray-500 rounded-md ml-2' onClick={addSubTask}>
                    Add Task
                </button>
            </div>

            {/* Drag-and-drop context for managing task reordering */}
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className='flex flex-col items-center xl:flex-row gap-6 xl:h-[750px]'>
                    {/* Pending and completed task components */}
                    <PendingTask
                        task={task}
                        enterKeyDown={enterKeyDown}
                        handleEditClick={handleEditClick}
                        deleteTask={deleteTask}
                        toggleCompletion={toggleCompletion}
                        editingTaskId={editingTaskId}
                        editedName={editedName}
                        setEditedName={setEditedName}
                    />
                    <CompletedTask
                        task={task}
                        enterKeyDown={enterKeyDown}
                        handleEditClick={handleEditClick}
                        deleteTask={deleteTask}
                        toggleCompletion={toggleCompletion}
                        editingTaskId={editingTaskId}
                        editedName={editedName}
                        setEditedName={setEditedName}
                    />
                </div>
            </DragDropContext>

            {/* Prompt component for additional interactions */}
            <Prompt />
        </>
    );
};

export default Home;
