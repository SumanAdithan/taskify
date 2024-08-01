import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/classNames';

interface MovingBorderProps {
    className?: string;
    color: string;
    children: ReactNode;
    initialRotation: number;
}

const MovingBorder: FC<MovingBorderProps> = ({
    className,
    children,
    color,
    initialRotation,
}) => {
    return (
        <motion.div className={cn('relative overflow-hidden ', className)}>
            <motion.div
                className={cn(
                    'absolute  top-[-50%] right-[-50%] bottom-[-50%] left-[-50%] bg-conic-gradient-primary',
                    color
                )}
                initial={{ rotate: initialRotation }}
                animate={{
                    rotate: 360 + initialRotation,
                }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            />
            {children}
        </motion.div>
    );
};

export default MovingBorder;
