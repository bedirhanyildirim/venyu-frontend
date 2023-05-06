import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import { useDispatch } from "react-redux"
import routes from "./routers/index"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase.config"
import { setUser } from "./stores/auth"
import { setLoader } from "./stores/loader"
import { useEffect, useState } from "react"

export default function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false);
  
  // if user is already logged in
  useEffect(() => {
    dispatch(setLoader(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDate = {
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid
        }
        dispatch(setUser(userDate))
        setIsAuth(true)
      } else {
        dispatch(setUser({}))
      }
      dispatch(setLoader(false))
    })
  }, []);
  
  // if already logged in user tries to go login or signup pages
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      navigate(location.state?.return_url || -1)
    }
  }, [isAuth]);
  
  
  return useRoutes(routes)
}

