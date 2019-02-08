'use strict'
// obtain production and development url from config vile
const config = require('../config.js')
// obtain current user information from store
const store = require('../store.js')

// send data to api
// Open Read: send token info for all actions except GET requests

const getSites = function () {
  return $.ajax({
    url: config.apiUrl + '/sites',
    method: 'GET'
  })
}

const addSite = dataa => {
  return $.ajax({
    url: config.apiUrl + '/sites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'site': dataa
    }
  })
}

const searchSites = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sites',
    method: 'GET'
  })
}

const updateSite = (data) => {
  return $.ajax({
    url: config.apiUrl + `/sites/${data.id}`,
    // url: config.apiUrl + '/sites/' + siteId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      site: {
        description: data.description
      }
    }
  })
}

const deleteSite = (siteId) => {
  return $.ajax({
    url: config.apiUrl + '/sites/' + siteId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getSites,
  addSite,
  searchSites,
  updateSite,
  deleteSite
}
