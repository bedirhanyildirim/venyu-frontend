import { NavLink } from "react-router-dom"
import { auth } from "../firebase/firebase.config"
import { signOut } from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../stores/auth"

export default function Header() {
  
  const dispatch = useDispatch()
  
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
        <NavLink to="/">
          Anasayfa
        </NavLink>
        <NavLink to="/login">
          Giriş Yap
        </NavLink>
        <NavLink to="/signup">
          Üye Ol
        </NavLink>
        <NavLink to="/profile">
          Profilim
        </NavLink>
        <NavLink to="/about" className="mr-4 md:mr-0">
          Hakkımızda
        </NavLink>
        <div className="hover:cursor-pointer" onClick={logout}>Çıkış Yap</div>
      </div>
    </div>
  )
}