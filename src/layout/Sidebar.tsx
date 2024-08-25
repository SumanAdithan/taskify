import { FC, useState } from 'react';
import { images } from '@utils'; // Importing image assets
import { MdEdit, MdDelete } from 'react-icons/md'; // Importing icons
import { useSidebarContext } from '@hooks'; // Custom hook for sidebar state
import { ToggleSidebar } from '@ui'; // Sidebar toggle component
import { usePromptContext } from '@hooks'; // Custom hook for prompt state
import { useTaskContext } from '@hooks'; // Custom hook for task state
import { Input } from '@headlessui/react'; // Input component from Headless UI
import { Link } from 'react-router-dom'; // Link component for routing
import { Task } from '@models';

const Sidebar: FC = () => {
    // Access the sidebar open state from SidebarContext
    const { isOpen } = useSidebarContext();
    // Access the togglePrompt function from PromptContext
    const { togglePrompt } = usePromptContext();
    // Access the task state and dispatch function from TaskContext
    const { state, dispatch } = useTaskContext();
    const tasks = state.tasks; // List of tasks
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null); // State for tracking which task is being edited
    const [editedName, setEditedName] = useState<string>(''); // State for the edited task name

    // Handle edit button click or update task on click
    const handleEditClick = (taskId: string, currentName: string) => {
        if (editingTaskId !== taskId) {
            setEditingTaskId(taskId);
            setEditedName(currentName);
        } else {
            updateTask(taskId);
        }
    };

    // Update task with new name
    const updateTask = (taskId: string) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: { id: taskId, name: editedName },
        });
        setEditingTaskId(null);
    };

    // Handle Enter key to update task name
    const enterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, taskId: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateTask(taskId);
        }
    };

    // Delete task by ID
    const deleteTask = (taskId: string) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: { id: taskId },
        });
    };

    return (
        <ToggleSidebar
            isOpen={isOpen}
            className='bg-background text-white border-e-2 border-e-border shadow-xl min-w-64 px-8 py-4'
        >
            {/* Sidebar header with logo and add task button */}
            <div className='flex items-center mt-2 gap-2'>
                <div className='w-10 h-10 bg-primary'>
                    <img className='w-9 h-9 relative -top-0.5' src={images.logo} alt='logo' />
                </div>
                <div className='text-2xl'>TASKIFY</div>
                <button
                    className='bg-primary rounded-full w-5 h-5 text-white font-bold leading-4 ml-4'
                    onClick={() => {
                        togglePrompt();
                    }}
                >
                    +
                </button>
            </div>
            {/* List of tasks */}
            <ul className='mt-8 flex flex-col gap-5 text-xl'>
                {tasks.map((task: Task) => (
                    <li
                        key={task.id}
                        className='hover:rounded-md p-2 cursor-pointer hover:bg-primary border-b-2 border-b-border hover:border-0'
                    >
                        <Link to={`/task/${task.id}`}>
                            <div className='flex items-center justify-between'>
                                {editingTaskId === task.id ? (
                                    <Input
                                        className='w-32 rounded-md bg-gray-500 p-1'
                                        onChange={e => setEditedName(e.target.value)}
                                        onKeyDown={e => {
                                            enterKeyDown(e, task.id);
                                        }}
                                        value={editedName}
                                    />
                                ) : (
                                    <div>{task.name}</div>
                                )}
                                <div className='space-x-2'>
                                    {/* Edit and Delete buttons */}
                                    <button className='h-4 w-4'>
                                        <MdEdit
                                            className='text-base'
                                            onClick={() => {
                                                handleEditClick(task.id, task.name);
                                            }}
                                        />
                                    </button>
                                    <button className='h-4 w-4' onClick={() => deleteTask(task.id)}>
                                        <MdDelete className='text-base' />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </ToggleSidebar>
    );
};

export default Sidebar;
