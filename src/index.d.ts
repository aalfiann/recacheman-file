export default class FileStore {
    /**
     * FileStore constructor.
     *
     * @param {String|Object} options
     * @api public
     */
    constructor(options?:string|object);

    /**
     * Get an entry.
     *
     * @param {String} key
     * @param {Function} fn
     * @api public
     */
    get(key: string, fn?: (err: any, data: any) => void): void;

    /**
     * Set an entry.
     *
     * @param {String} key
     * @param {Mixed} val
     * @param {Number} ttl
     * @param {Function} fn
     * @api public
     */
    set(key: string, val: any, ttl?: number, fn?: (err: any, data: any) => void): void;

    /**
     * Delete an entry (Supported glob-style patterns).
     *
     * @param {String} key
     * @param {Function} fn
     * @api public
     */
    del(key: string, fn?: (err: any) => void): void;

    /**
     * Clear all entries in cache.
     *
     * @param {Function} fn
     * @api public
     */
    clear(fn?: (err: any, data: any) => void): void;

    /**
     * Get all for a number of entries from a cursor point
     *
     * @param {Function} fn
     * @api public
     */
    getAll(fn?: (err: any, entries: { key: string; data: any }[]) => void): void;
}
