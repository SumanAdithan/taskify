import { FC } from 'react';

const Sidebar: FC = () => {
    return (
        <aside className='bg-white text-black min-w-64 w-64 px-8 py-4 shadow-xl'>
            <div>
                <div>
                    <img src='' alt='' />
                </div>
                <div>TASKIFY</div>
            </div>
            <ul>
                <li className='mb-2'>
                    <a>Task 1</a>
                </li>
                <li className='mb-2'>
                    <a>Task 2</a>
                </li>
                <li className='mb-2'>
                    <a>Task 3</a>
                </li>
                <li className='mb-2'>
                    <a>Task 3</a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
