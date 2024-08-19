import { FC } from 'react';
import TaskProvider from '@/contextProvider/TaskProvider';
import TaskifyRoutes from '@routes';
import SidebarProvider from '@/contextProvider/sidebarProvider';
import PromptProvider from './contextProvider/promptProvider';

const App: FC = () => {
    return (
        <TaskProvider>
            <SidebarProvider>
                <PromptProvider>
                    <TaskifyRoutes />
                </PromptProvider>
            </SidebarProvider>
        </TaskProvider>
    );
};

export default App;
