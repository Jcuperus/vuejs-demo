export default {
  set: function (key, item) {
    if (typeof item === 'string') {
      sessionStorage.setItem(key, item)
    } else {
      sessionStorage.setItem(key, JSON.stringify(item))
    }
  },
  get: function (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (e) {
      return sessionStorage.getItem(key)
    }
  },
  has: function (key) {
    return sessionStorage.getItem !== null
  },
  delete: function (key) {
    sessionStorage.removeItem(key)
  }
}
