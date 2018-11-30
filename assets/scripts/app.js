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
  $('#mag').on('click', siteEvents.onSearchSites)
  $('#add-button').on('click', siteEvents.onAddSites)
  $('#create').click(function () {
    $('#main-create').toggle()
    $('#main-get').css('display', 'none')
    $('#main-search').css('display', 'none')
    $(this).closest('form').find('input[type=text], textarea').val('')
  })
  $('#get').click(function () {
    // $('#main-get').toggle()
    $('#main-create').css('display', 'none')
  })
})

// $('#create').click(function () {
//   $('#main-get').toggle()
// })
