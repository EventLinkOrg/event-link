class LocalStorage {
    static setItem(key: string, value: string) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    static isItemInLocalStorage(key: string): boolean {
        try {
            const value = localStorage.getItem(key);
            return value ? true : false;
        } catch (error) {
            return false;
        }
    }

    static getItem(key: string) {
        try {
            if (this.isItemInLocalStorage(key)) {
                return localStorage.getItem(key);
            }
            return undefined;
        } catch (error) {
            console.error('Error retrieving from localStorage:', error);
            return undefined;
        }
    }

    static removeItem(key: string) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    }
}

export { LocalStorage }