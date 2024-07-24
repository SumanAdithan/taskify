import { FC, ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
    return <main className='flex-1 p-4'>{children}</main>;
};

export default Main;
