import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { Layout } from '@layout';
import { HomePage, ErrorPage } from '@pages';
import { FC } from 'react';

// Define the routes for the Taskify application
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
            {/* The home page route */}
            <Route index element={<HomePage />} />

            {/* Route for task details with a dynamic id */}
            <Route path='task/:id' element={<HomePage />} />
        </Route>
    )
);

// TaskifyRoutes component that provides the router context
const TaskifyRoutes: FC = () => <RouterProvider router={router} />;

export default TaskifyRoutes;
