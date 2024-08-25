import { FC, useEffect } from 'react';
import { Sidebar, Navbar, Main } from '@layout';
import { Outlet } from 'react-router-dom';
import { useSidebarContext } from '@hooks';

const DesktopLayout: FC = () => {
    // Access the toggleSidebar function from SidebarContext
    const { toggleSidebar } = useSidebarContext();

    useEffect(() => {
        // Ensure the sidebar is visible on component mount
        toggleSidebar(true);
    }, [toggleSidebar]);

    return (
        <div className='flex bg-background w-screen h-screen xl:overflow-y-hidden'>
            {/* Sidebar component for navigation */}
            <Sidebar />

            <div className='w-full min-h-screen overflow-y-scroll'>
                {/* Navbar component for top navigation */}
                <Navbar />

                {/* Main content area */}
                <Main>
                    {/* The Outlet component renders the matched child route */}
                    <Outlet />
                </Main>
            </div>
        </div>
    );
};

export default DesktopLayout;
