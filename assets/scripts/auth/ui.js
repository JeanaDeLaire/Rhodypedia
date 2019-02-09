'use strict'

const store = require('../store.js')

// change message at the bottom of sign up modal if successful login
const signUpSuccess = data => {
  $('#message-up').text('Signed up successfully')
  // clear form
  $('input:text, input:password').val('')
  // change sign out button to log out
  // $('#sign-out').text('Log Out')
  // change sign in target buttom text to reflect existing account
  $('#skip').html("Let's get you signed in.")
}

// change message at the bottom of sign up modal if failed login
// clear form
const signUpFailure = () => {
  $('#message-up').text('Error on sign up')
  $('input:text, input:password').val('')
}

// change message at the bottom of sign in modal if successful login
const signInSuccess = data => {
  // set stored user to data returned from CRUD
  store.user = data.user
  $('#sign-in').modal('hide')
  // swap nav with signed in user nav
  $('.nav-up').toggle()
  $('.nav-out').toggle()
  // clear form
  $('input:text, input:password').val('')
  $('#sign-out').text('Log Out')
  // $('#sign-in-close').show()
}

// change message at the bottom of sign in modal if failed login
// clear form
const signInFailure = () => {
  $('#message-in').text('Error on sign in')
  $('input:text, input:password').val('')
  $('#skip-sign-up').show()
}

// change message at the bottom of change password modal if successful
// clear form
const changePasswordSuccess = data => {
  $('#message-change').text('Password changed successfully')
  $('input:text, input:password').val('')
}

// change message at the bottom of cp modal if failed
// clear form
const changePasswordFailure = () => {
  $('#message-change').text('Error on password change')
  $('input:text, input:password').val('')
}

// inform user they are signed out on success
const signOutSuccess = data => {
  // clear stored user
  store.user = null
  // change text of the button to reflect that a user is signed out
  // swap signed in nav with signed out nav
  $('.nav-up').toggle()
  $('.nav-out').toggle()
  $('#sign-out').text('You are now logged out.')
  // clear all forms as an added precaution
  $('input:text, input:password').val('')
  // close the navbar
  $('.navbar-collapse').collapse('hide')
  $('#skip').html('Already have an account?')
  $('#sign-in-close').hide()
}

// inform user if something goes wrong when they attempt to sign out
const signOutFailure = () => {
  // change text of button if something oges wrong
  $('#sign-out').text('Something went wrong. Sign out again.')
  // clear all forms as an added precaution
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
