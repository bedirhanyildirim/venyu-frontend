import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Profile from "../pages/Profile"

import PrivateRoute from "../components/privateRoute"

import GuestUser from "../layouts/GuestUser"

const routes = [
  {
    path: '/',
    element: <GuestUser/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'profile',
        element: <Profile />,
        auth: true
      }
    ]
  }
]

const authCheck = routes => routes.map(route => {
  if (route?.auth) {
    route.element = <PrivateRoute>{ route.element }</PrivateRoute>
  }
  if (route?.children) {
    route.children = authCheck(route.children)
  }
  return route
})

export default authCheck(routes)