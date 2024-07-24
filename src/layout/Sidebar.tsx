import { FC } from 'react';

const Sidebar: FC = () => {
    return (
        <aside className='bg-gray-800 text-white min-w-64  w-64 p-4'>
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
