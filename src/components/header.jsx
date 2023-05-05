import { NavLink } from "react-router-dom"

export default function Header() {
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
        <NavLink to="/about" className="mr-4 md:mr-0">
          Hakkımızda
        </NavLink>
      </div>
    </div>
  )
}