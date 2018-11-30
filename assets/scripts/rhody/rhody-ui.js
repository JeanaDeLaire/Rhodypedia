'use strict'

const store = require('../store.js')
const showSitesTemplate = require('../templates/site-listing.handlebars')
const showSearchTemplate = require('../templates/search-listing.handlebars')

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
}

const addSiteFailure = (error) => {
  console.log(error)
  $('#add-site-message').text('Fail.')
}

let results = { resultsarr: [] }

const searchSitesSuccess = (data) => {
  results = { resultsarr: [] }
  const input = $('.searchbar').val()
  $('#main-search').toggle()
  $('.content').html('')
  $('#main-get').css('display', 'none')
  data.sites.filter(function (el) {
    if (el.keywords) {
      if (el['keywords'].includes(input)) {
        results.resultsarr.push(el)
        console.log(results)
        const showSitesHtml = showSearchTemplate({
          resultsarr: data.resultsarr
        })
        $('.content-search').html(showSitesHtml)
      }
    }
  })
}

// results.resultsarr.forEach(el => {
//   const cellHtml = el.cells.map(i => {
//     return `<div class=".blogs">$(i)</div>`
//   })
//   const container = `<div class=".content">${cellHtml.join('')}</div>`
//   $('.content').html(container)
//   // $('#main-search').toggle()
// })

// const searchSitesFailure = (data) => {}

module.exports = {
  getSitesSuccess,
  addSiteSuccess,
  addSiteFailure,
  results,
  searchSitesSuccess
  // searchSitesFailure
}
