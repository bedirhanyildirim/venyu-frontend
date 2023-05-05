import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Signup from "../pages/Signup.jsx"

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
      }
    ]
  }
]

export default routes