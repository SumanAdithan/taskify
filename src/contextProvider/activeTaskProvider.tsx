import { activeTaskContext } from '@/context/activeTaskContext';
import { FC, ReactNode, useState } from 'react';

interface activeTaskProviderProps {
    children: ReactNode;
}

export const ActiveTaskProvider: FC<activeTaskProviderProps> = ({
    children,
}) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = (value?: boolean) => {
        if (value === undefined) {
            setIsActive(prev => !prev);
        } else {
            setIsActive(value);
        }
    };

    return (
        <activeTaskContext.Provider value={{ isActive, toggleActive }}>
            {children}
        </activeTaskContext.Provider>
    );
};

export default ActiveTaskProvider;
