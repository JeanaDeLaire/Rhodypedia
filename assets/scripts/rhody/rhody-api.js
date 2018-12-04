'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getSites = function () {
  return $.ajax({
    url: config.apiUrl + '/sites',
    method: 'GET'
  })
}

const addSite = dataa => {
  console.log(dataa)
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

const updateSite = data => {
  return $.ajax({
    url: config.apiUrl + `/sites/${store.site.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSite = (siteId) => {
  return $.ajax({
    url: config.apiUrl + '/sites' + siteId,
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
