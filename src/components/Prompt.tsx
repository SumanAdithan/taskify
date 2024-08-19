import { FC } from 'react';
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Input,
    Button,
} from '@headlessui/react';
import { useState } from 'react';
import { usePromptContext } from '@/hooks/usePromptContext';
import { useTaskContext } from '@/hooks/useTasksContext';
import { v4 as uuidv4 } from 'uuid';

const Prompt: FC = () => {
    const { isOpen, togglePrompt } = usePromptContext();
    const { dispatch } = useTaskContext();
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input) {
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: uuidv4(),
                    name: input,
                    isDone: false,
                },
            });
            togglePrompt();
        } else {
            togglePrompt();
        }
    };
    return (
        <>
            <Dialog
                open={isOpen}
                as='div'
                onClose={() => togglePrompt()}
                className='relative z-50 focus:outline-none'
            >
                <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                    <DialogPanel className='flex flex-col max-w-lg space-y-4 border bg-background p-12 rounded-md border-primary text-white'>
                        <DialogTitle className='font-bold'>
                            Create Task
                        </DialogTitle>
                        {/* <Description>create task as per the name</Description> */}
                        <Input
                            className={
                                'p-1 rounded-md  border-2 border-primary bg-gray-600 outline-none'
                            }
                            placeholder='Enter a Task Name'
                            onChange={e => setInput(e.target.value)}
                        />

                        <Button
                            className={
                                'self-start py-1 px-3 rounded-md border-2 border-primary hover:bg-primary transition-colors'
                            }
                            onClick={addTask}
                        >
                            Add
                        </Button>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default Prompt;
