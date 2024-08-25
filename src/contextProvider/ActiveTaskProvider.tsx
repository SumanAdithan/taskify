import { ActiveTaskContext } from '@context';
import { FC, ReactNode, useState } from 'react';

// Interface for the provider props
interface ActiveTaskProviderProps {
    children: ReactNode; // ReactNode type for children elements
}

// ActiveTaskProvider component
export const ActiveTaskProvider: FC<ActiveTaskProviderProps> = ({ children }) => {
    // State to manage the active status
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the active status
    const toggleActive = (value?: boolean) => {
        if (value === undefined) {
            // If no value is provided, toggle the state
            setIsActive(prev => !prev);
        } else {
            // Set state to the provided value
            setIsActive(value);
        }
    };

    return (
        <ActiveTaskContext.Provider
            value={{
                isActive,
                toggleActive,
            }}
        >
            {children} {/* Render children within the context provider */}
        </ActiveTaskContext.Provider>
    );
};

export default ActiveTaskProvider;
