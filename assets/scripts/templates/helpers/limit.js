'use strict'

const store = require('../../store.js')

const limit = (user_id) => {
  if (store.user === undefined || store.user === null) {
    store.user = {
      id: 'a'
    }
  }
  if (store.user.id === user_id) {
    return true
  } else {
    return false
  }
}

module.exports = limit
