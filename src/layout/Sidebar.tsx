import { FC } from 'react';
import { images } from '@/utils/images';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const Sidebar: FC = () => {
    return (
        <aside className='bg-background text-white border-e-2 border-e-border min-w-64 w-64 px-8 py-4 shadow-xl overflow-y-scroll'>
            <div className='flex items-center mt-2 gap-2'>
                <div className='w-10 h-10 bg-primary '>
                    <img
                        className='w-9 h-9 relative -top-0.5'
                        src={images.logo}
                        alt='logo'
                    />
                </div>
                <div className='text-2xl'>TASKIFY</div>
                <button className='bg-primary rounded-full w-5 h-5 text-white font-bold leading-4 ml-4'>
                    +
                </button>
            </div>
            <ul className='mt-8 flex flex-col gap-5 text-xl'>
                <li className='hover:rounded-md p-2 cursor-pointer hover:bg-primary border-b-2 border-b-border hover:border-0'>
                    <div className='flex items-center justify-between '>
                        <div>Task 1</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <MdEdit className='text-base' />
                            </button>
                            <button className='h-4 w-4'>
                                <MdDelete className='text-base' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 2</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <MdEdit className='text-base' />
                            </button>
                            <button className='h-4 w-4'>
                                <MdDelete className='text-base' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 3</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <MdEdit className='text-base' />
                            </button>
                            <button className='h-4 w-4'>
                                <MdDelete className='text-base' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 3</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <MdEdit className='text-base' />
                            </button>
                            <button className='h-4 w-4'>
                                <MdDelete className='text-base' />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
