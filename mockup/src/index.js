
import React from 'react'
import Router, {Route, DefaultRoute} from 'react-router'
import App from './App/App'
import Kong from './Kong/Kong'

const routes = (
  <Route handler={App} path='/'>
    <Route name='kong' path='k/:k'>
      <DefaultRoute handler={Kong}/>
    </Route>
  </Route>
)

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
