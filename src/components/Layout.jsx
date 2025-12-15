import { Outlet } from "react-router-dom"
import Header from "./UI/Header"
import Footer from "./UI/Footer,"

// image
import fentax from '../assets/image/profile.jpg'

// icon whatsapp
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <>
    <main className="relative">
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
    
    <figure className="w-10 h-10 fixed bottom-5 right-5 rounded-full overflow-hidden border-2 border-green-800 ">
      <img src={fentax} alt="" className="w-full h-full object-cover relative"/>
    </figure>
    </>
  )
}

export default Layout
