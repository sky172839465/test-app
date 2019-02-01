import Loadable from 'react-loadable'
import AppLoading from './component/Common/AppLoading/index'

const lazyloadComponent = (pageName) => (
  Loadable({
    loader: () => import(`./component/Page/${pageName}/index`),
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
