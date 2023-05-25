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
          <div className="w-full flex justify-end">
            <NavLink
              to="/sources/new"
              className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600">
              Yeni Mekan Ekle
            </NavLink>
          </div>
          <div className="flex gap-4 mt-4">
            {mySources.map((source, index) => {
              return (
                <div key={index} className="border shadow-sm bg-white rounded text-center p-2 lg:p-10 flex w-full h-full flex-col items-center">
                  <h1 className="text-lg font-bold">{source.title || source.name}</h1>
                  <p className="">Kapasite: {source.capacity}</p>
                  <p className="">Ortak Kullanım: {source.sharedUsage ? 'Evet' : 'Hayır'}</p>
                  <NavLink
                    to="/"
                    className="mt-2 text-emerald-700 py-1 px-10 hover:cursor-pointer hover:text-emerald-600">
                    Düzenle
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}