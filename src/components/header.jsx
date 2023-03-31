import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center bg-gray-100 gap-4 p-2 bg-white">
      <NavLink to="/" className="text-xl font-bold mr-auto">
        Venyu
      </NavLink>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about" className="mr-4">
        About
      </NavLink>
    </div>
  )
}