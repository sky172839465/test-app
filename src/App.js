import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import routeConfig from './routeConfig'
import AppHeader from './component/Common/AppHeader'
import NoFoundPage from './component/Page/NotFound'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <AppHeader />
          <main>
            <Switch>
              <Route exact path='/' render={() => <Redirect to={routeConfig[0].path} />} />
              {routeConfig.map(route => {
                return <Route path={route.path} component={route.component} key={route.page} />
              })}
              <Route component={NoFoundPage} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    )
  }
}

export default App
