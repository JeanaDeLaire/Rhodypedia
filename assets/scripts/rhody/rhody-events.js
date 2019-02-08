'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./rhody-api.js')
const ui = require('./rhody-ui.js')
const store = require('../store.js')

const onGetSites = (event) => {
  // prevent page from reloading
  event.preventDefault()
  // make api call
  api.getSites()
    // offer feedback to user
    .then(ui.getSitesSuccess)
    .catch(ui.failure)
}

const onAddSites = event => {
  event.preventDefault()
  const data = {
    name: $('#title').val(),
    keywords: $('#keywords').val(),
    description: $('#description').val(),
    user_id: store.user.id
  }
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

const onUpdateSite = event => {
  event.preventDefault()
  const data = {}
  data.description = $(event.target).closest('form').find('textarea').val()
  data.id = $(event.target).closest('section').data('id')
  api.updateSite(data)
    .then(ui.updateSiteSuccess)
    .catch(ui.updateSiteFailure)
}

const onDeleteSite = (event) => {
  event.preventDefault()
  const siteId = $(event.target).closest('section').data('id')
  api.deleteSite(siteId)
    .then(() => onGetSites(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#get').on('click', onGetSites)
  $('.content').on('click', '.delete-site', onDeleteSite)
  $('.content').on('click', '.append-button', onUpdateSite)
}

module.exports = {
  addHandlers,
  onAddSites,
  onSearchSites,
  onUpdateSite,
  onDeleteSite
}
