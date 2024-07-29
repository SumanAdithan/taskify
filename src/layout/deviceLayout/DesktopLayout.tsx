import { FC } from 'react';
import Sidebar from '@layout/Sidebar';
import Navbar from '@layout/Navbar';
import Main from '@layout/Main';
import { Outlet } from 'react-router-dom';

const DesktopLayout: FC = () => {
    return (
        <div className='flex bg-background w-screen h-screen'>
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
