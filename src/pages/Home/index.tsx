import { FC, useEffect, useState, useRef } from 'react';
import { Task } from '@/models/taskModel';
import Prompt from '@/components/Prompt';
import { useTaskContext } from '@/hooks/useTasksContext';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
import {
    loadFromLocalStorage,
    saveToLocalStorage,
} from '@/utils/localStorageUtils';
import { DragDropContext } from '@hello-pangea/dnd';
import PendingTask from '@/components/PendingTask';
import CompletedTask from '@/components/CompletedTask';

const LOCAL_STORAGE_KEY = 'taskState';

const Home: FC = () => {
    const { state, dispatch } = useTaskContext();
    const [input, setInput] = useState('');
    const [task, setTask] = useState<Task | null>(null);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editedName, setEditedName] = useState<string>('');

    const { id } = useParams();
    const navigate = useNavigate();
    const currentTaskIdRef = useRef<string | null>(null);

    useEffect(() => {
        const savedState = loadFromLocalStorage<{ tasks: Task[] }>(
            LOCAL_STORAGE_KEY
        );
        if (savedState) {
            dispatch({ type: 'SET_INITIAL_STATE', payload: savedState });
        }
    }, [dispatch]);

    useEffect(() => {
        if (state.tasks.length > 0) {
            if (id) {
                const foundTask = state.tasks.find(task => id === task.id);
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

    useEffect(() => {
        if (state && state.tasks && state.tasks.length > 0) {
            saveToLocalStorage(LOCAL_STORAGE_KEY, state);
        }
    }, [state]);

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

    const enterKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        taskId: string
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateTask(taskId);
        }
    };

    const handleEditClick = (taskId: string, currentName: string) => {
        if (editingTaskId === taskId) {
            updateTask(taskId);
            setEditingTaskId(null);
        } else {
            setEditingTaskId(taskId);
            setEditedName(currentName);
        }
    };

    const updateTask = (taskId: string) => {
        dispatch({
            type: 'UPDATE_SUBTASK',
            payload: {
                subTask: { id: taskId, name: editedName },
                taskId: currentTaskIdRef.current,
            },
        });
        setEditingTaskId(null);
    };

    const deleteTask = (taskId: string) => {
        console.log('hi');
        dispatch({
            type: 'DELETE_SUBTASK',
            payload: { subTaskId: taskId, taskId: id },
        });
    };

    const toggleCompletion = (taskId: string) => {
        dispatch({
            type: 'TOGGLE_SUBTASK_COMPLETION',
            payload: { subTaskId: taskId, taskId: currentTaskIdRef.current },
        });
    };

    const handleDragEnd = (result: any) => {
        const { source, destination } = result;

        if (!destination) return;

        const taskId = currentTaskIdRef.current;
        if (!taskId) return;

        const task = state.tasks.find(task => task.id === taskId);
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
            <div className='flex justify-center mb-4'>
                <input
                    type='text'
                    placeholder='Enter a task'
                    className='p-2 bg-slate-400 placeholder-white text-white border-none outline-none rounded-md'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button
                    className='p-1 text-white bg-gray-500 rounded-md ml-2'
                    onClick={addSubTask}
                >
                    Add Task
                </button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className='flex flex-col items-center xl:flex-row gap-6 xl:h-[750px]'>
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
            <Prompt />
        </>
    );
};

export default Home;
