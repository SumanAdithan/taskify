import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center'>
            <h1 className='text-4xl font-bold mb-4 text-red-600'>Something went wrong!</h1>
            <p className='text-lg mb-4'>We couldn't find the page you're looking for.</p>
            <Link
                to='/'
                className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
