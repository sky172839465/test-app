import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import routeConfig from './routeConfig'
import AppHeader from './Component/Common/AppHeader'
import NoFoundPage from './Component/Page/NotFound'
import 'bulma/css/bulma.min.css'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <AppHeader
            name='Test App'
            link='https://sky172839465.github.io/test-app'
          />
          <section className='section'>
            <div className='container is-fluid'>
              <Switch>
                <Route exact path='/' render={() => <Redirect to={routeConfig[0].path} />} />
                {routeConfig.map(route => {
                  return <Route
                    path={route.path}
                    component={route.component}
                    key={route.page}
                  />
                })}
                <Route component={NoFoundPage} />
              </Switch>
            </div>
          </section>
        </div>
      </HashRouter>
    )
  }
}

export default App
