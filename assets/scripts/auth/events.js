'use strict'

// obtain form data with FormFields
const getFormFields = require('../../../lib/get-form-fields.js')
// obtain CRUD call from api.js
const api = require('./api.js')
// obtain user feedback from ui.js
const ui = require('./ui.js')

const onSignUp = event => {
  // prevent page from reloading
  event.preventDefault()
  // obtain form data with FormFields
  const data = getFormFields(event.target)
  // call CRUD event
  api.signUp(data)
    // inform user based on success and failure
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// method to clear forms after submission
const onClear = event => {
  $('input:text, input:password').val('')
  $('.auth-message').text('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onClear
}
