/**
 * Load an item from local storage.
 * @param key - The key of the item to retrieve.
 * @returns The parsed value from local storage or null if the item does not exist or an error occurs.
 */
export const loadFromLocalStorage = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error loading from local storage', error);
        return null;
    }
};

/**
 * Save an item to local storage.
 * @param key - The key under which to store the item.
 * @param value - The value to store.
 */
export const saveToLocalStorage = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
};
