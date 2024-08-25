import { FC, ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils';

// Define the properties for the ToggleSidebar component
interface AnimatedSidebarProps {
    isOpen: boolean; // Controls whether the sidebar is open or closed
    children: ReactNode; // Content to be displayed inside the sidebar
    className?: string; // Optional additional class names for customization
}

// ToggleSidebar component to animate sidebar visibility
const ToggleSidebar: FC<AnimatedSidebarProps> = ({ isOpen, children, className }) => {
    const [showSidebar, setShowSidebar] = useState(isOpen);

    // Update the visibility of the sidebar when isOpen changes
    useEffect(() => {
        if (isOpen) {
            setShowSidebar(true);
        }
    }, [isOpen]);

    // Hide the sidebar after the closing animation completes
    const handleAnimationComplete = () => {
        if (!isOpen) {
            setShowSidebar(false);
        }
    };

    return (
        <motion.aside
            initial={{ marginLeft: -256 }} // Start position (hidden) off-screen
            animate={{ marginLeft: isOpen ? 0 : -256 }} // Animate to open or closed position
            transition={{ duration: 0.5 }} // Animation duration
            onAnimationComplete={handleAnimationComplete} // Callback for animation completion
            className={cn(
                'overflow-y-scroll', // Ensure scrolling for overflow content
                showSidebar ? '' : 'hidden', // Conditionally hide sidebar when not shown
                className // Apply additional custom class names
            )}
        >
            {children}
        </motion.aside>
    );
};

export default ToggleSidebar;
