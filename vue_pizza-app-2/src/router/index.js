import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

// 二级路由
import Contact from '../components/about/Contact'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'
import Delivery from '../components/about/Delivery'

// 三级路由
import Phone from '../components/about/contant/Phone'
import Person from '../components/about/contant/Person'

export const routes = [
  {
    path: '/',
    components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'history': History,
      'delivery': Delivery
    }
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menuLink'
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/about',
    component: About,
    name: 'aboutLink',
    redirect: 'about/contact',
    children: [{
      path: 'contact',
      name: 'contactLink',
      redirect: '/about/contact/phone',
      component: Contact,
      children: [{
        path: 'phone',
        component: Phone,
        name: 'phoneNumber'
      }, {
        path: 'personname',
        component: Person,
        name: 'personName'
      }]
    },
    {
      path: '/history',
      name: 'historyLink',
      component: History
    },
    {
      path: '/orderingGuide',
      name: 'orderingGuideLink',
      component: OrderingGuide
    },
    {
      path: '/delivery',
      name: 'deliveryLink',
      component: Delivery
    }]
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
