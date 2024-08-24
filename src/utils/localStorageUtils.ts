// src/utils/localStorageUtils.ts

export const loadFromLocalStorage = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error loading from local storage', error);
        return null;
    }
};

export const saveToLocalStorage = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
};
