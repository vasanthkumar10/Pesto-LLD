class InMemoryCache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  remove(key) {
    if (this.has(key)) delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }

  has(key) {
    return key in this.cache;
  }

  static getInstance() {
    if (!InMemoryCache.instance) {
      InMemoryCache.instance = new InMemoryCache();
    }
    return InMemoryCache.instance;
  }
}

// module.exports = InMemoryCache;
// singleton pattern
// const globalCache = new InMemoryCache();
// const localCache = new InMemoryCache();
module.exports = InMemoryCache.getInstance();
