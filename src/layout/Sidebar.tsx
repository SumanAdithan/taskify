import { FC } from 'react';
import { images } from '@/utils/images';
import { icons } from '@/utils/images';

const Sidebar: FC = () => {
    return (
        <aside className='bg-white text-black min-w-64 w-64 px-8 py-4 shadow-xl overflow-y-scroll'>
            <div className='flex items-center mt-2 space-x-2'>
                <div className='w-10 h-10'>
                    <img
                        className='w-full h-full'
                        src={images.logo}
                        alt='logo'
                    />
                </div>
                <div className='text-2xl'>TASKIFY</div>
                <button className='bg-black rounded-full w-5 h-5 text-white font-bold leading-4'>
                    +
                </button>
            </div>
            <ul className='mt-8 flex flex-col gap-5 text-xl'>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between '>
                        <div>Task 1</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <img src={icons.editIcon} alt='edit' />
                            </button>
                            <button className='h-4 w-4'>
                                <img src={icons.deleteIcon} alt='delete' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 2</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <img src={icons.editIcon} alt='edit' />
                            </button>
                            <button className='h-4 w-4'>
                                <img src={icons.deleteIcon} alt='delete' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 3</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <img src={icons.editIcon} alt='edit' />
                            </button>
                            <button className='h-4 w-4'>
                                <img src={icons.deleteIcon} alt='delete' />
                            </button>
                        </div>
                    </div>
                </li>
                <li className='rounded-md p-2 cursor-pointer hover:bg-primary'>
                    <div className='flex items-center justify-between'>
                        <div>Task 3</div>
                        <div className='space-x-2'>
                            <button className='h-4 w-4'>
                                <img src={icons.editIcon} alt='edit' />
                            </button>
                            <button className='h-4 w-4'>
                                <img src={icons.deleteIcon} alt='delete' />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
