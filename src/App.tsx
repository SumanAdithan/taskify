import { FC } from 'react';
import TaskProvider from '@/contextProvider/TaskProvider';
import TaskifyRoutes from '@routes';
import SidebarProvider from '@/contextProvider/sidebarProvider';
import PromptProvider from './contextProvider/promptProvider';
import ActiveTaskProvider from './contextProvider/activeTaskProvider';

const App: FC = () => {
    return (
        <TaskProvider>
            <SidebarProvider>
                <PromptProvider>
                    <ActiveTaskProvider>
                        <TaskifyRoutes />
                    </ActiveTaskProvider>
                </PromptProvider>
            </SidebarProvider>
        </TaskProvider>
    );
};

export default App;
