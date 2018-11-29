'use strict'

// const store = require('../store.js')

const showSitesTemplate = require('../templates/site-listing.handlebars')

const getSitesSuccess = (data) => {
  console.log(data)
  const showSitesHtml = showSitesTemplate({ sites: data.sites })
  $('#get').on('click', function () {
    $('.content').html(showSitesHtml)
    $('#main-get').toggle()
  })
}

module.exports = {
  getSitesSuccess
}
