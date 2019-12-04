import { LandingView } from '../views'
import { FeedView } from '../views'
const routes = [
  {
    path: '/',
    auth: false,
    component: LandingView,
    exact: true
  },
  {
    path: '/feed',
    auth: true,
    component: FeedView,
    exact: true
  }
]

export default routes
