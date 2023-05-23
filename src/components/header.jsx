import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase/firebase.config"
import { signOut } from "firebase/auth"
import { setUser } from "../stores/auth"
import { useRef, useState } from "react"
import useOnClickOutside from "../hooks/useOnClickOutside"

export default function Header({ isNavigation = true }) {
  
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const userInfo = useSelector(state => state.auth.user)
  const profileDropDownRef = useRef()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  useOnClickOutside(profileDropDownRef, () => setIsDropdownOpen(false))
  
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}))
    }).catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className="w-full flex h-16 justify-center items-center bg-gray-100 bg-white">
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
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-emerald-700 w-full max-w-[40px] aspect-square rounded-full relative cursor-pointer">
                <span className="absolute flex justify-center items-center text-center w-full h-full text-xl text-white">
                  {userInfo.displayName.slice(0,1)}
                </span>
                {isDropdownOpen && (
                  <div ref={profileDropDownRef} className="absolute top-0 right-0 mt-14 bg-white border shadow-sm bg-white rounded-lg py-4">
                    <ul className="w-full text-left">
                      <NavLink to="/profile" className="w-full">
                        <li className="w-full p-1 px-5 hover:cursor-pointer hover:bg-gray-300">
                          Profilim
                        </li>
                      </NavLink>
                      <li className="w-full p-1 px-5 hover:cursor-pointer hover:bg-gray-300">Reservasyonlarım</li>
                      <li className="w-full p-1 px-5 hover:cursor-pointer hover:bg-gray-300">Mekanlarım</li>
                      <li className="w-full p-1 px-5 hover:cursor-pointer hover:bg-gray-300">İstekler</li>
                      <li className="w-full p-1 px-5 text-red-700 hover:cursor-pointer hover:bg-gray-300" onClick={logout}>Çıkış yap</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}