import { FC } from 'react';

const ErrorPage: FC = () => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>Something went wrong!</h1>
            <p>We couldn't find the page you're looking for.</p>
        </div>
    );
};

export default ErrorPage;
