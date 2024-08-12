import { FC, ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/classNames';

interface AnimatedSidebarProps {
    isOpen: boolean;
    children: ReactNode;
    className?: string;
}

const ToggleSidebar: FC<AnimatedSidebarProps> = ({
    isOpen,
    children,
    className,
}) => {
    const [showSidebar, setShowSidebar] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShowSidebar(true);
        }
    }, [isOpen]);

    const handleAnimationComplete = () => {
        if (!isOpen) {
            setShowSidebar(false);
        }
    };
    return (
        <motion.aside
            initial={{ marginLeft: -256 }}
            animate={{ marginLeft: isOpen ? 0 : -256 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={handleAnimationComplete}
            className={cn(
                'overflow-y-scroll',
                showSidebar ? '' : 'hidden',
                className
            )}
        >
            {children}
        </motion.aside>
    );
};

export default ToggleSidebar;
