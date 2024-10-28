import { IoGlobe } from "react-icons/io5";
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}
const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (

    <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text--danger focus:outline-none">
                  {isOpen ? (<AiOutlineClose />) : (<AiOutlineBars />)}
              </button>

                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
                    
                    <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">
                      <a href="#" className="hover:text--danger transition-colors duration-300">Home</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Docs</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Inbox</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Notifications</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Profile</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Installation</a>
                    </div>

                    <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">
                      <a href="#" className ="text--danger text-lg font-semibold">General</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Logout</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">English <IoGlobe type="globealt" className="inline"/></a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Settings</a>
                      <a href="#" className="hover:text--danger transition-colors duration-300">Billing & Payments</a>
                    </div>
                </div>
              </div>
            </div>

            
  )
}

export default MobileMenu