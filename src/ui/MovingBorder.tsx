import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils';

// Define the properties for the MovingBorder component
interface MovingBorderProps {
    className?: string; // Optional additional class names for customization
    color: string; // Color for the moving border
    children: ReactNode; // Content to be wrapped by the moving border
    initialRotation: number; // Initial rotation angle of the border
}

// MovingBorder component to create a moving gradient border effect
const MovingBorder: FC<MovingBorderProps> = ({ className, children, color, initialRotation }) => {
    return (
        <motion.div className={cn('relative overflow-hidden', className)}>
            {/* Gradient border with moving animation */}
            <motion.div
                className={cn(
                    'absolute top-[-50%] right-[-50%] bottom-[-50%] left-[-50%] bg-conic-gradient-primary',
                    color
                )}
                initial={{ rotate: initialRotation }}
                animate={{ rotate: 360 + initialRotation }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            />
            {children}
        </motion.div>
    );
};

export default MovingBorder;
