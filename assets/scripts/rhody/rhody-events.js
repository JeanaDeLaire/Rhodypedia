'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./rhody-api.js')
const ui = require('./rhody-ui.js')
const store = require('../store.js')

const onGetSites = (event) => {
  event.preventDefault()
  api.getSites()
    .then(ui.getSitesSuccess)
    .catch(ui.failure)
}

// const onAddSites = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.addSite(data)
//     .then(ui.addSiteSuccess)
//     .catch(ui.addSiteFailure)
// }

const onAddSites = event => {
  event.preventDefault()
  const data = {
    name: $('#title').val(),
    keywords: $('#keywords').val(),
    description: $('#description').val(),
    user_id: store.user.id
  }
  console.log(data)
  api.addSite(data)
    .then(ui.addSiteSuccess)
    .catch(ui.addSiteFailure)
}

const onSearchSites = event => {
  event.preventDefault()
  api.searchSites()
    .then(ui.searchSitesSuccess)
    .catch(ui.searchSitesfailure)
}

const addHandlers = () => {
  $('#get').on('click', onGetSites)
}

module.exports = {
  addHandlers,
  onAddSites,
  onSearchSites
}
