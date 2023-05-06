import { useRoutes } from 'react-router-dom'
import routes from './routers/index'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase.config'
import { useDispatch } from 'react-redux'
import { setUser } from './stores/auth'
import { setLoader } from './stores/loader'
import { useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch()
  
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
      } else {
        dispatch(setUser({}))
      }
      dispatch(setLoader(false))
    })
  }, []);
  
  return useRoutes(routes)
}

