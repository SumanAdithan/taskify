import { FC } from 'react';
import {
    TaskProvider,
    SidebarProvider,
    PromptProvider,
    ActiveTaskProvider,
} from '@contextProvider';
import TaskifyRoutes from '@routes';

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
