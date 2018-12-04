'use strict'

const store = require('../store.js')
const showSitesTemplate = require('../templates/site-listing.handlebars')
// const showSearchTemplate = require('../templates/search-listing.handlebars')

const getSitesSuccess = (data) => {
  console.log(data)
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

const addSiteFailure = (error) => {
  console.log(error)
  $('#add-site-message').text('Fail.')
}

// let results = { resultsarr: [] }

// const searchTemplate = $('#search-template').html()
// const compiledSearchTemplate = Handlebars.compile(searchTemplate)
//
// const searchSitesSuccess = (data) => {
//   results = { resultsarr: [] }
//   const input = $('.searchbar').val()
//   $('#main-search').toggle()
//   $('.content').html('')
//   $('#main-get').css('display', 'none')
//   $('#main-get').css('display', 'none')
//   data.sites.filter(function (el) {
//     if (el.keywords) {
//       if (el['keywords'].includes(input)) {
//         results.resultsarr.push(el)
//         console.log(results)
//         // $('#search-container').html(compiledSearchTemplate(results))
//         const showSitesHtml = showSearchTemplate({
//           resultsarr: data.resultsarr
//         })
//         // $('#content-search').html(showSitesHtml)
//         $('#content-search').html('Maybe one day this will work')
//       }
//     }
//   })
// }

// const searchSitesFailure = (data) => {}

const updateSiteSuccess = data => {
  const formDescription = $(event.target).closest('form').find('textarea').val()
  data.details.append(formDescription)
  // $('.content').closest('.blog-details').append(formDescription)
  $('#create-form').find('input[type=text], textarea').val('')
}

const updateSiteFailure = () => {
  $('.blog-comments').text('Move failed')
}

const failure = (error) => {
  console.log(error)
}

module.exports = {
  getSitesSuccess,
  addSiteSuccess,
  addSiteFailure,
  // results,
  // searchSitesSuccess,
  // searchSitesFailure
  updateSiteSuccess,
  updateSiteFailure,
  failure
}
