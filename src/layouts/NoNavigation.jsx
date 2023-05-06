import { Outlet } from "react-router-dom"

import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

export default function NoNavigation() {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <Header isNavigation={false} />
      <div id="content" className="w-full h-full flex justify-center bg-gray-100 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}