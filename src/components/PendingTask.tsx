import { FC } from 'react';
import MovingBorder from '@/ui/MovingBorder';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Task } from '@/models/taskModel';

interface PendingTaskProps {
    enterKeyDown: (
        e: React.KeyboardEvent<HTMLInputElement>,
        taskId: string
    ) => void;
    handleEditClick: (taskId: string, currentName: string) => void;
    deleteTask: (taskId: string) => void;
    toggleCompletion: (taskId: string) => void;
    editingTaskId: string | null;
    editedName: string;
    setEditedName: React.Dispatch<React.SetStateAction<string>>;
    task: Task | null;
}

const PendingTask: FC<PendingTaskProps> = ({
    task,
    enterKeyDown,
    handleEditClick,
    deleteTask,
    toggleCompletion,
    editingTaskId,
    editedName,
    setEditedName,
}) => {
    return (
        <>
            <MovingBorder
                className='w-full p-1 shadow-xl bg-background xl:w-1/2'
                color='bg-conic-gradient-primary'
                initialRotation={45}
            >
                <Droppable droppableId='pendingTasks'>
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            className='relative bg-inherit h-full p-4 w-full'
                            ref={provided.innerRef}
                        >
                            <div className='p-4 bg-primary text-white text-center rounded-md'>
                                Pending Tasks
                            </div>
                            <div className='mt-4 p-4'>
                                <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border'>
                                    {task?.subTasks
                                        ?.filter(subTask => !subTask.isDone)
                                        ?.map((subTask, index) => (
                                            <Draggable
                                                key={subTask.id}
                                                draggableId={subTask.id}
                                                index={index}
                                            >
                                                {provided => (
                                                    // Update the isDone property based on the destination list
                                                    <li
                                                        className={`p-2 bg-primary text-white mb-2 flex items-center justify-between select-none ${
                                                            subTask.isDone
                                                                ? 'line-through'
                                                                : ''
                                                        }`}
                                                        onDoubleClick={() =>
                                                            toggleCompletion(
                                                                subTask.id
                                                            )
                                                        }
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {editingTaskId ===
                                                        subTask.id ? (
                                                            <input
                                                                className='w-32 rounded-md bg-gray-500 p-1'
                                                                onChange={e =>
                                                                    setEditedName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                onKeyDown={e =>
                                                                    enterKeyDown(
                                                                        e,
                                                                        subTask.id
                                                                    )
                                                                }
                                                                value={
                                                                    editedName
                                                                }
                                                            />
                                                        ) : (
                                                            <div>
                                                                {subTask.name}
                                                            </div>
                                                        )}
                                                        <div className='space-x-2'>
                                                            <button className='h-4 w-4'>
                                                                <MdEdit
                                                                    className='text-base'
                                                                    onClick={() =>
                                                                        handleEditClick(
                                                                            subTask.id,
                                                                            subTask.name
                                                                        )
                                                                    }
                                                                />
                                                            </button>
                                                            <button
                                                                className='h-4 w-4'
                                                                onClick={() =>
                                                                    deleteTask(
                                                                        subTask.id
                                                                    )
                                                                }
                                                            >
                                                                <MdDelete className='text-base' />
                                                            </button>
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </ul>
                            </div>
                        </div>
                    )}
                </Droppable>
            </MovingBorder>
        </>
    );
};

export default PendingTask;
