'use strict'

const store = require('../store.js')

const showSitesTemplate = require('../templates/site-listing.handlebars')

const getSitesSuccess = (data) => {
  console.log(data)
  const showSitesHtml = showSitesTemplate({ sites: data.sites })
  $('#get').on('click', function () {
    $('.content').html(showSitesHtml)
    $('#main-get').toggle()
  })
}

const addSiteSuccess = (data) => {
  store.site = data.site
  $('#add-site-message').text('Look at you go! View all posts to check out your submission.')
}

const addSiteFailure = (error) => {
  console.log(error)
  $('#add-site-message').text('Fail.')
}

module.exports = {
  getSitesSuccess,
  addSiteSuccess,
  addSiteFailure
}
