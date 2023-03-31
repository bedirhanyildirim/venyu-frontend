import { Outlet } from "react-router-dom"

import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

export default function GuestUser() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div id="content" className="w-full h-full flex bg-gray-100 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}