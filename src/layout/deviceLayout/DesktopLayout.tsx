import { FC, useEffect } from 'react';
import Sidebar from '@layout/Sidebar';
import Navbar from '@layout/Navbar';
import Main from '@layout/Main';
import { Outlet } from 'react-router-dom';
import { useSidebarContext } from '@/hooks/useSidebarContext';

const DesktopLayout: FC = () => {
    const { toggleSidebar } = useSidebarContext();

    useEffect(() => {
        toggleSidebar(true);
    }, []);

    return (
        <div className='flex bg-background w-screen h-screen xl:overflow-y-hidden'>
            <Sidebar />
            <div className='w-full min-h-screen overflow-y-scroll'>
                <Navbar />
                <Main>
                    <Outlet />
                </Main>
            </div>
        </div>
    );
};

export default DesktopLayout;
