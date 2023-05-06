import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase/firebase.config"
import { signOut } from "firebase/auth"
import { setUser } from "../stores/auth"

export default function Header({ isNavigation = true }) {
  
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}))
    }).catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 bg-white">
      <div className="content flex justify-between items-center gap-4 py-2">
        <NavLink to="/" className="text-2xl font-bold mr-auto ml-4 md:ml-0">
          Venyu
        </NavLink>
        {isNavigation && (
          <>
            <NavLink to="/">
              Anasayfa
            </NavLink>
            <NavLink to="/about" className="mr-4 md:mr-0">
              Hakkımızda
            </NavLink>
            {!isLoggedIn && (
              <NavLink to="/login">
                Giriş Yap
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink to="/signup">
                Üye Ol
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/profile">
                Profilim
              </NavLink>
            )}
            {isLoggedIn && (
              <div className="hover:cursor-pointer" onClick={logout}>
                Çıkış Yap
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}