import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function ProfileSideMenu () {
  const userInfo = useSelector(state => state.auth.user)
  
  return (
    <div className="border shadow-sm bg-white rounded-2xl text-center p-2 lg:p-10 flex w-full h-full flex-col items-center">
      <div className="bg-emerald-700 w-full max-w-[150px] aspect-square rounded-full relative">
        <span className="absolute flex justify-center items-center text-center w-full h-full text-xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
          {userInfo.displayName.slice(0,1)}
        </span>
      </div>
      <h2 className="mt-6 text-2xl font-bold">{userInfo.displayName}</h2>
      <span className="w-full p-1 my-2 text-sm hover:cursor-pointer text-gray-700 hover:text-gray-600">Profili düzenle</span>
      <ul className="w-full mt-1 whitespace-nowrap border-t">
        <NavLink to="/sources" className="w-full">
          <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
            Mekanlarım
          </li>
        </NavLink>
        <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
          İstekler
        </li>
        <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
          Reservasyonlarım
        </li>
      </ul>
    </div>
  )
}