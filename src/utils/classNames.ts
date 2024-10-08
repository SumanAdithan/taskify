import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for merging Tailwind CSS classes
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
