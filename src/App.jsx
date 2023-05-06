import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
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
  const [isAuth, setIsAuth] = useState(false)
  const userInfo = useSelector(state => state.auth.user)
  
  // if user is already logged in
  useEffect(() => {
    dispatch(setLoader(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid
        }
        dispatch(setUser(userData))
        setIsAuth(true)
      } else {
        dispatch(setUser({}))
      }
      dispatch(setLoader(false))
    })
  }, [])
  
  // if already logged in user tries to go login or signup pages
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/complete-profile') {
      navigate(location.state?.return_url || -1)
    }
    checkCompletedProfile()
  }, [isAuth])
  
  // if already logged in user but profile is not completed
  useEffect(() => {
    checkCompletedProfile()
  }, [location])
  
  const checkCompletedProfile = () => {
    if (Object.keys(userInfo).length > 0 && !userInfo.displayName && location.pathname !== '/complete-profile') {
      console.log('missing user info')
      navigate('/complete-profile')
    }
  }
  
  return useRoutes(routes)
}

