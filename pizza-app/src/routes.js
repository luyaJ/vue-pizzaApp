import Home from './components/Home'
import _Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

import History from './components/about/History'
import Contact from './components/about/Contact'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'

export const routes = [
  {
    path: '/',
    components: {
      default: Home,
      'history': History,
      'contact': Contact
    }
  },
  {
    path: '/menu',
    component: _Menu,
    name: 'MenuLink'
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'history',
        component: History,
        name: 'historyLink'
      },
      {
        path: 'contact',
        component: Contact,
        name: 'contactLink'
      },
      {
        path: 'orderingGuide',
        component: OrderingGuide
      },
      {
        path: 'delivery',
        component: Delivery
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  }
]
