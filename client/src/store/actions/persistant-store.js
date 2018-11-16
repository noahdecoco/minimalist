class PersistantStore {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear() {
    localStorage.clear();
  }
}

export default PersistantStore;
