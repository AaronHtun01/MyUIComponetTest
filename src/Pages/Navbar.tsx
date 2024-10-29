import { useState } from "react"
import RightSideNav from "../components/RightSideNav"
import LeftSide from "../components/LeftSide"
import MobileMenu from "../components/MobileMenu"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 z-40 w-full py-6 border-b-2 bg-white">
      <div className= "flex flex-row justify-between items-start mx-10">
          
         <LeftSide />

        <RightSideNav />

        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
      </div>
    </nav>
  )
}

export default Navbar