'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message-up').text('Signed up successfully')
  $('input:text, input:password').val('')
  $('#sign-out').text('Log Out')
  $('#skip-sign-up').hide()
  $('#sign-up-close').show()
}

const signUpFailure = (error) => {
  $('#message-up').text('Error on sign up')
  $('input:text, input:password').val('')
  console.log(error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message-in').text('You are now sigined in.')
  $('input:text, input:password').val('')
  $('#sign-out').text('Log Out')
  $('#sign-in-close').show()
}

const signInFailure = () => {
  $('#message-in').text('Error on sign in')
  $('input:text, input:password').val('')
}

const changePasswordSuccess = data => {
  $('#message-change').text('Password changed successfully')
  $('input:text, input:password').val('')
}

const changePasswordFailure = () => {
  $('#message-change').text('Error on password change')
  $('input:text, input:password').val('')
}

const signOutSuccess = data => {
  store.user = null
  $('#sign-out').text('You are now logged out.')
  $('input:text, input:password').val('')
  $('#sign-up').modal('show')
}

const signOutFailure = () => {
  $('#sign-out').text('Something went wrong. Sign out again.')
  $('input:text, input:password').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
