import { LandingView } from '../views'
import { FeedView } from '../views'
const routes = [
  {
    path: '/',
    component: LandingView,
    exact: true
  },
  {
    path: '/feed',
    component: FeedView,
    exact: true
  }
]

export default routes
