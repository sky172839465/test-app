import Loadable from 'react-loadable'
import AppLoading from './Component/Common/AppLoading'

const lazyloadComponent = (pageName) => (
  Loadable({
    loader: () => import(`./Component/Page/${pageName}`),
    loading: AppLoading
  })
)

const routeConfig = [
  {
    page: 'search',
    path: '/search',
    component: lazyloadComponent('Search')
  }
]

export default routeConfig
