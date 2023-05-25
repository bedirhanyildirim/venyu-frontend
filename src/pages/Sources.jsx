import { NavLink } from "react-router-dom"
import useMySources from "../hooks/useMySources"

export default function Sources() {
  
  const mySources = useMySources()
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Mekanlarım</h1>
      <p className="mt-2">Bu sayfada size ait mekanları yönetebilirsiniz</p>
      {mySources.length < 1 ? (
        <div className="w-full my-20 flex flex-col items-center justify-center">
          <span className="text-lg mb-2">Mekan bulunamadı!</span>
          <NavLink
            to="/sources/new"
            className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600">
            Hemen Mekan Ekle
          </NavLink>
        </div>
      ) : (
        <div className="w-full my-10">
          <p className="text-lg mb-2">Kayıtlı mekan adeti: - {mySources.length}</p>
          <NavLink
            to="/sources/new"
            className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600">
            Yeni Mekan Ekle
          </NavLink>
        </div>
      )}
    </div>
  )
}