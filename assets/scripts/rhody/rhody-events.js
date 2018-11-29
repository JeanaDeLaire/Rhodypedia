'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./rhody-api.js')
const ui = require('./rhody-ui.js')
const store = require('../store.js')

const onGetSites = (event) => {
  event.preventDefault()
  api.getSites()
    .then(ui.getSitesSuccess)
    .catch(ui.failure)
}

// const onAddSites = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.addSite(data)
//     .then(ui.addSiteSuccess)
//     .catch(ui.addSiteFailure)
// }

const onAddSites = event => {
  event.preventDefault()
  const data = {
    name: $('#title').val(),
    keywords: $('#keywords').val(),
    description: $('#description').val(),
    user_id: store.user.id
  }
  console.log(data)
  api.addSite(data)
    .then(ui.addSiteSuccess)
    .catch(ui.addSiteFailure)
}

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
  addHandlers,
  onAddSites
}
