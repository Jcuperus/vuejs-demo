import SessionHelper from '@/helpers/session-storage-helper'

export default {
  currentUser: null,
  storeUser: function (user) {
    this.currentUser = user
    SessionHelper.set('currentUser', user)
  },
  getCurrentUser: function () {
    console.log(SessionHelper.get('currentUser'))
    if (this.currentUser !== null) {
      return this.currentUser
    } else if (SessionHelper.has('currentUser')) {
      return SessionHelper.get('currentUser')
    }
    return null
  }
}
