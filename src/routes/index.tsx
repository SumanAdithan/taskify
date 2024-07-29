import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Layout from '@layout/Layout';
import Home from '@pages/Home';
import { FC } from 'react';
import ErrorPage from '@pages/ErrorPage';

// routes for taskify
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
        </Route>
    )
);

const TaskifyRoutes: FC = () => <RouterProvider router={router} />;

export default TaskifyRoutes;
