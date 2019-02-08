'use strict'

const store = require('../../store.js')

// return true if current user created post
// if a user is not signed in create store.user.id and set as string
const limit = (user_id) => {
  if (store.user === undefined) {
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
