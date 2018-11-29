'use strict'

const authEvents = require('./auth/events.js')
const siteEvents = require('./rhody/rhody-events.js')

$(() => {
  siteEvents.addHandlers()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.cls').on('click', authEvents.onClear)
  $('#create').click(function () {
    $('#main-create').toggle()
    $('#main-get').css('display', 'none')
  })
  $('#get').click(function () {
    // $('#main-get').toggle()
    $('#main-create').css('display', 'none')
  })
})

// $('#create').click(function () {
//   $('#main-get').toggle()
// })
