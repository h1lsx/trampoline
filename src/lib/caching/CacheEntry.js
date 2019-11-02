/**
 * @template T
 */
class CacheEntry {
  /**
   * @param {any} key 
   * @param {T} value 
   * @param {number} expires 
   */
  constructor(key, value, expires) {
    this.key = key;
    this.value = value;
    this.expires = expires;
    this.created = Date.now();
  }

  getExpiresDate() {
    return new Date(this.expires).toUTCString();
  }
}

module.exports = CacheEntry;
