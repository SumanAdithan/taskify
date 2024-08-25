import { FC } from 'react';
import { Dialog, DialogPanel, DialogTitle, Input, Button } from '@headlessui/react';
import { useState } from 'react';
import { usePromptContext } from '@hooks';
import { useTaskContext } from '@hooks';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Prompt: FC = () => {
    // Destructure values from the Prompt context
    const { isOpen, togglePrompt } = usePromptContext();

    // Destructure dispatch function from Task context
    const { dispatch } = useTaskContext();

    // State to hold the input value
    const [input, setInput] = useState('');

    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Function to add a new task
    const addTask = () => {
        // Generate a new unique ID for the task
        const newTaskId = uuidv4();

        // Check if input is not empty
        if (input) {
            // Dispatch an action to add the new task
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: newTaskId,
                    name: input,
                    isDone: false,
                },
            });
            // Clear the input field
            setInput('');
            // Close the prompt dialog
            togglePrompt();
            // Navigate to the newly created task page
            navigate(`/task/${newTaskId}`);
        } else {
            // If input is empty, just close the prompt dialog
            togglePrompt();
        }
    };

    return (
        <Dialog
            open={isOpen}
            as='div'
            onClose={() => togglePrompt()}
            className='relative z-50 focus:outline-none'
        >
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                <DialogPanel className='flex flex-col max-w-lg space-y-4 border bg-background p-12 rounded-md border-primary text-white'>
                    <DialogTitle className='font-bold'>Create Task</DialogTitle>
                    <Input
                        className='p-1 rounded-md border-2 border-primary bg-gray-600 outline-none'
                        placeholder='Enter a Task Name'
                        onChange={e => setInput(e.target.value)}
                    />
                    <Button
                        className='self-start py-1 px-3 rounded-md border-2 border-primary hover:bg-primary transition-colors'
                        onClick={addTask}
                    >
                        Add
                    </Button>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default Prompt;
