export default {
    /**
     * 存储
     * @param key
     * @param value
     */
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get(key: string) {
        const value = localStorage.getItem(key);
        if (!value) return '';
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    },

    remove(key: string) {
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    }
};
