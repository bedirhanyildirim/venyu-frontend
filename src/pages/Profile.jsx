import useMySources from "../hooks/useMySources"
import ProfileSideMenu from "../components/profileSideMenu"

export default function Profile() {
  
  const mySources = useMySources()
  
  return (
    <div className="content">
      <div className="mt-6 grid grid-cols-4 gap-4 auto-rows-min items-start">
        <ProfileSideMenu />
        <div className="col-span-3 flex flex-col w-full gap-4">
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            Mekanlarım - {mySources.length}
          </div>
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            Reservasyonlarım
          </div>
          <div className="border shadow-sm bg-white rounded-2xl p-2 lg:p-10">
            İstekler
          </div>
        </div>
      </div>
    </div>
  )
}