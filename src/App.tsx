import { FC } from 'react';
import TaskProvider from '@provider/TaskProvider';
import TaskifyRoutes from '@routes';
import SidebarProvider from '@provider/sidebarProvider';

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
