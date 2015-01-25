
React = require 'react'
Router = require 'react-router'
RouteHandler = React.createFactory Router.RouteHandler

{div, h1} = React.DOM

PhraseStore = require '../stores/PhraseStore'

module.exports = App = React.createClass do
  componentWillMount: ->
    PhraseStore.addChangeListener @_onChange
    @setState do
      phrases: @getPhraseState!
  componentWillUnmount: ->
    PhraseStore.removeChangeListener @_onChange
  _onChange: -> @setState do
    phrases: @getPhraseState!
  getPhraseState: -> PhraseStore.getAll!
  render: ->
    div {},
      div {id: "header", className: "fixed"},
        h1 {} "ㄟ⋯⋯那個⋯⋯"
      div {className: "full height container"}
        RouteHandler {phrases: @state.phrases}
