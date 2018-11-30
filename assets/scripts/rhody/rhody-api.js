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

//
// const changePassword = data => {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const signOut = () => {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getSites,
  addSite,
  searchSites
}
