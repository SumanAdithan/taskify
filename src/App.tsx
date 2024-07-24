import { FC } from 'react';
import TaskProvider from './provider/TaskProvider';
import TaskifyRoutes from './routes';

const App: FC = () => {
    return (
        <TaskProvider>
            <TaskifyRoutes />
        </TaskProvider>
    );
};

export default App;
