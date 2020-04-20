export function getStorageItem (key) {
  return window.localStorage.getItem(key)
}

export function setStorageItem (key, value) {
  window.localStorage.setItem(key, value)
}
