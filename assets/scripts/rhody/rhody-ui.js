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
  $('#create-form').find('input[type=text], textarea').val('')
}

const addSiteFailure = (error) => {
  console.log(error)
  $('#add-site-message').text('Fail.')
}

// const searchSitesSuccess = (data) => {
//   console.log(data)
//   const showSitesHtml = showSearchTemplate({
//     sites: data.sites
//   })
//   console.log(data)
//   $('.content').html('')
//   $('.content').html(showSitesHtml)
//   $('#main-get').css('display', 'none')
//   $('#main-search').toggle()
// }

let results = { resultsarr: [] }

const searchSitesSuccess = (data) => {
  results = { resultsarr: [] }
  const input = $('.searchbar').val()
  // api data and incoming data should be lowercased before comparing
  data.sites.filter(function (el) {
    if (el.keywords) {
      if (el['keywords'].includes(input)) {
        results.resultsarr.push(el)
        console.log(results)
        // const showSitesHtml = showSearchTemplate({
        //   resultsarr: data.resultsarr
        // })
        // $('.content-search').html(showSitesHtml)
      } else {
        console.log('No match')
      }
    }
  })
  // go through each object within the array
  // results.resultsarr.forEach(el => {
  //   // print each object within a div class = content
  //   const elFront = JSON.stringify(el.id)
  //   $('#main-search').text(elFront)
  const showSitesHtml = showSearchTemplate({
    resultsarr: results.resultsarr
  })
    // each individual object should be within div class = blogs

    // each name should be within an h2

    // each site id and each keywords should be within a paragraph
    // with spans around them

    // each description should be within a paragraph with a class blog details
  // })
  $('#main-search').toggle()
  $('.content').html('')
  $('.content').html(showSitesHtml)
  $('#main-get').css('display', 'none')
}

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
  searchSitesSuccess,
  // searchSitesFailure
  updateSiteSuccess,
  updateSiteFailure,
  failure
}
