'use strict'

// obtain current data in store
const store = require('../store.js')
// require handlebars template for showing all sites
const showSitesTemplate = require('../templates/site-listing.handlebars')
// require handlebars template for searching through sites
const showSearchTemplate = require('../templates/search-listing.handlebars')

// display content under site description when all sites are requested
const getSitesSuccess = (data) => {
  const showSitesHtml = showSitesTemplate({
    sites: data.sites
  })
  $('.content').html('')
  $('.content').html(showSitesHtml)
  $('#main-search').css('display', 'none')
  $('#main-get').toggle()
}

// change message at the bottom of the add site form when successful
const addSiteSuccess = (data) => {
  store.site = data.site
  $('#add-site-message').text('Look at you go! View all posts to check out your submission.')
  // clear form
  $('#create-form').find('input[type=text], textarea').val('')
}

// change message at the bottom of the site form if unsuccessful
const addSiteFailure = () => {
  $('#add-site-message').text('Sign up to create sites.')
}

let results = { resultsarr: [] }

const searchresultsvisual = () => {
  // set data to send to handlebars template
  const showSitesHtml = showSearchTemplate({
    resultsarr: results.resultsarr
  })
  // reset content
  $('.content').html('')
  $('.content').html(showSitesHtml)
  // hide other content displays
  $('#main-get').css('display', 'none')
  $('#main-search').toggle()
}

const searchSitesSuccess = (data) => {
  results = { resultsarr: [] }
  // take input of searchbar and compare it to keywords for all sites
  const input = $('.searchbar').val()
  // api data and incoming data should be lowercased before comparing
  data.sites.filter(function (el) {
    if (el.keywords) {
      if (el['keywords'].includes(input)) {
        results.resultsarr.push(el)
      }
    }
  })
  searchresultsvisual()
}

// change searchbar value to inform user of issue
const searchSitesFailure = () => {
  $('.searchbar').val('Something went wrong. :(')
}

// update site by finding closest site when dropdown is toggled
const updateSiteSuccess = data => {
  const formDescription = $(event.target).closest('form').find('textarea').val()
  data.details.append(formDescription)
  $('.append-content').find('input[type=text], textarea').val('')
  // alert user site was upated through message at bottom of form
  $('.add-site-message').text('Updated! Click the explore button to review your submission.')
}

// inform user of failure
const updateSiteFailure = () => {
  $('.add-site-message').text('Updated! Click the explore button to review your submission.')
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
