import { FC, useState } from 'react';
import { images } from '@/utils/images';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useSidebarContext } from '@/hooks/useSidebarContext';
import ToggleSidebar from '@/ui/ToggleSidebar';
import { usePromptContext } from '@/hooks/usePromptContext';
import { useTaskContext } from '@/hooks/useTasksContext';
import { Input } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Sidebar: FC = () => {
    const { isOpen } = useSidebarContext();
    const { togglePrompt } = usePromptContext();
    const { state, dispatch } = useTaskContext();
    const tasks = state.tasks;
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [editedName, setEditedName] = useState<string>('');

    const handleEditClick = (taskId: string, currentName: string) => {
        if (editingTaskId !== taskId) {
            setEditingTaskId(taskId);
            setEditedName(currentName);
        } else {
            updateTask(taskId);
        }
    };

    const updateTask = (taskId: string) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: { id: taskId, name: editedName },
        });
        setEditingTaskId(null);
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
            <div className='flex items-center mt-2 gap-2'>
                <div className='w-10 h-10 bg-primary '>
                    <img
                        className='w-9 h-9 relative -top-0.5'
                        src={images.logo}
                        alt='logo'
                    />
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
            <ul className='mt-8 flex flex-col gap-5 text-xl'>
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className='hover:rounded-md p-2 cursor-pointer hover:bg-primary border-b-2 border-b-border hover:border-0'
                    >
                        <Link to={`/task/${task.id}`}>
                            <div className='flex items-center justify-between '>
                                {editingTaskId === task.id ? (
                                    <Input
                                        className='w-32 rounded-md bg-gray-500 p-1'
                                        onChange={e =>
                                            setEditedName(e.target.value)
                                        }
                                        onKeyDown={e => {
                                            enterKeyDown(e, task.id);
                                        }}
                                        value={editedName}
                                    />
                                ) : (
                                    <div>{task.name}</div>
                                )}

                                <div className='space-x-2'>
                                    <button className='h-4 w-4'>
                                        <MdEdit
                                            className='text-base'
                                            onClick={() => {
                                                handleEditClick(
                                                    task.id,
                                                    task.name
                                                );
                                            }}
                                        />
                                    </button>
                                    <button
                                        className='h-4 w-4'
                                        onClick={() => deleteTask(task.id)}
                                    >
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
