import Loadable from 'react-loadable'
import AppLoading from './component/Common/AppLoading'

const lazyloadComponent = (pageName) => (
  Loadable({
    loader: () => import(`./component/Page/${pageName}`),
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
