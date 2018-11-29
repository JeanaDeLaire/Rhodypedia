'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./rhody-api.js')
const ui = require('./rhody-ui.js')

const onGetSites = (event) => {
  event.preventDefault()
  api.getSites()
    .then(ui.getSitesSuccess)
    .catch(ui.failure)
}

// const onSignUp = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
// const onSignIn = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onSignOut = event => {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onClear = event => {
//   $('input:text, input:password').val('')
//   $('.auth-message').text('')
// }

const addHandlers = () => {
  $('#get').on('click', onGetSites)
}

module.exports = {
  addHandlers
}
