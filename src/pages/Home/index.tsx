import { FC, useEffect, useState } from 'react';
import { Task } from '@/models/taskModel';
import MovingBorder from '@/ui/MovingBorder';
import Prompt from '@/components/Prompt';
import { useTaskContext } from '@/hooks/useTasksContext';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const Home: FC = () => {
    const { state, dispatch } = useTaskContext();
    const [input, setInput] = useState('');
    const [task, setTask] = useState<Task | null>(null);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setTask(state.tasks.find(task => id === task.id) || null);
        }
    }, [id, state]);

    const addSubTask = () => {
        if (input) {
            dispatch({
                type: 'ADD_SUBTASK',
                payload: {
                    subTask: { id: uuidv4(), name: input, isDone: false },
                    taskId: id,
                },
            });
        }
    };

    return (
        <>
            <div className='flex justify-center mb-4'>
                <input
                    type='text'
                    placeholder='enter a task'
                    className='p-2 bg-slate-400 placeholder-white text-white border-none outline-none rounded-md'
                    onChange={e => setInput(e.target.value)}
                />
                <button
                    className='p-1 text-white bg-gray-500 rounded-md ml-2'
                    onClick={() => addSubTask()}
                >
                    Add Task
                </button>
            </div>
            <div className='flex flex-col items-center xl:flex-row gap-6 xl:h-[750px] '>
                <MovingBorder
                    className='w-full p-1 shadow-xl bg-background xl:w-1/2'
                    color='bg-conic-gradient-primary'
                    initialRotation={45}
                >
                    <div className='relative bg-inherit h-full p-4 w-full'>
                        <div className='p-4 bg-primary text-white text-center rounded-md '>
                            Pending Task
                        </div>
                        <div className=' mt-4 p-4  '>
                            <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                                {task?.subTasks?.map(task => {
                                    console.log(task);
                                    return (
                                        <li className='p-2 bg-primary text-white mb-2'>
                                            {task.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </MovingBorder>
                <Prompt />
                <MovingBorder
                    className='w-full p-1 shadow-xl bg-background xl:w-1/2'
                    color='bg-conic-gradient-secondary'
                    initialRotation={115}
                >
                    <div className='relative bg-inherit h-full p-4'>
                        <div className='p-4 bg-secondary text-white text-center rounded-md '>
                            Completed Task
                        </div>
                        <div className=' mt-4 p-4  '>
                            <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                                <li className='p-2 bg-secondary text-white'>
                                    hello
                                </li>
                            </ul>
                        </div>
                    </div>
                </MovingBorder>
            </div>
        </>
    );
};

export default Home;
