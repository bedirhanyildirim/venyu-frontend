import { useSelector } from "react-redux"
import useMySources from "../hooks/useMySources"


export default function Profile() {
  
  const userInfo = useSelector(state => state.auth.user)
  const mySources = useMySources([])
  
  return (
    <div className="content">
      <div className="mt-6 grid grid-cols-4 gap-4 auto-rows-min items-start">
        <div className="border shadow-sm bg-white rounded-2xl text-center p-2 lg:p-10 flex w-full h-full flex-col items-center">
          <div className="bg-emerald-700 w-full max-w-[150px] aspect-square rounded-full relative">
            <span className="absolute flex justify-center items-center text-center w-full h-full text-xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              {userInfo.displayName.slice(0,1)}
            </span>
          </div>
          <h2 className="mt-6 text-2xl font-bold">{userInfo.displayName}</h2>
          <span className="w-full p-1 text-sm hover:cursor-pointer text-gray-700 hover:text-gray-600">Profili düzenle</span>
          <ul className="mt-4 pt-3 w-full whitespace-nowrap border-t">
            <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
              Reservasyonlarım
            </li>
            <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
              Mekanlarım
            </li>
            <li className="w-full p-2 hover:cursor-pointer hover:text-gray-600">
              İstekler
            </li>
            <li className="w-full p-2 text-red-600 hover:text-red-800 hover:cursor-pointer">
              Çıkış yap
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col w-full gap-4">
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            Reservasyonlarım
          </div>
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            Mekanlarım - {mySources.length}
          </div>
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            İstekler
          </div>
        </div>
      </div>
    </div>
  )
}