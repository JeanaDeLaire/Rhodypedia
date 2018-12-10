'use strict'

const store = require('../store.js')
const showSitesTemplate = require('../templates/site-listing.handlebars')
const showSearchTemplate = require('../templates/search-listing.handlebars')

const getSitesSuccess = (data) => {
  const showSitesHtml = showSitesTemplate({
    sites: data.sites
  })
  $('.content').html('')
  $('.content').html(showSitesHtml)
  $('#main-search').css('display', 'none')
  $('#main-get').toggle()
}

const addSiteSuccess = (data) => {
  store.site = data.site
  $('#add-site-message').text('Look at you go! View all posts to check out your submission.')
  $('#create-form').find('input[type=text], textarea').val('')
}

const addSiteFailure = () => {
  $('#add-site-message').text('Fail.')
}

let results = { resultsarr: [] }

const searchresultsvisual = () => {
  const showSitesHtml = showSearchTemplate({
    resultsarr: results.resultsarr
  })
  $('.content').html('')
  $('.content').html(showSitesHtml)
  $('#main-get').css('display', 'none')
  $('#main-search').toggle()
}

const searchSitesSuccess = (data) => {
  results = { resultsarr: [] }
  const input = $('.searchbar').val()
  // api data and incoming data should be lowercased before comparing
  data.sites.filter(function (el) {
    if (el.keywords) {
      if (el['keywords'].includes(input)) {
        results.resultsarr.push(el)
      }
      // else {
      //   console.log('No match')
      // }
    }
  })
  searchresultsvisual()
}

const searchSitesFailure = () => {
  $('.searchbar').val('Something went wrong. :(')
}

const updateSiteSuccess = data => {
  const formDescription = $(event.target).closest('form').find('textarea').val()
  data.details.append(formDescription)
  $('.append-content').find('input[type=text], textarea').val('')
  $('.add-site-message').text('Updated! Click the explore button to review your submission.')
}

const updateSiteFailure = () => {
  $('.add-site-message').text('Success! Click explore to review your submission.')
}

const failure = () => {
  alert('error processing request')
}

module.exports = {
  getSitesSuccess,
  addSiteSuccess,
  addSiteFailure,
  searchSitesSuccess,
  searchSitesFailure,
  updateSiteSuccess,
  updateSiteFailure,
  failure
}
