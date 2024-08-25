import { FC, ReactNode } from 'react';

// Define the props for the Main component
interface MainProps {
    children: ReactNode; // ReactNode is a type that includes anything that can be rendered in React (elements, strings, numbers, etc.)
}

// Functional component for rendering the main content area
const Main: FC<MainProps> = ({ children }) => {
    return (
        <main className='p-10'>
            {children} {/* Render the children passed to this component */}
        </main>
    );
};

export default Main;
