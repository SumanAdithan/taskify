import { FC } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Main from '../Main';
import { Outlet } from 'react-router-dom';

const DesktopLayout: FC = () => {
    return (
        <div className='flex  h-screen'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <Main>
                    <Outlet />
                </Main>
            </div>
        </div>
    );
};

export default DesktopLayout;
