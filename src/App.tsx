import { FC } from 'react';
import TaskProvider from '@/contextProvider/TaskProvider';
import TaskifyRoutes from '@routes';
import SidebarProvider from '@/contextProvider/sidebarProvider';

const App: FC = () => {
    return (
        <TaskProvider>
            <SidebarProvider>
                <TaskifyRoutes />
            </SidebarProvider>
        </TaskProvider>
    );
};

export default App;
