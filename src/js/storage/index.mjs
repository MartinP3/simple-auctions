// Saves info from local storage
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Tries to load info from local storage if it's there
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

// Removes local storage info
export function remove(key) {
  localStorage.removeItem(key);
}
