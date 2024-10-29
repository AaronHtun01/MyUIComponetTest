import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { cn } from "../utils";

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const mobileMenuItems = [
  { name: 'Home', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Inbox', href: '#' },
  { name: 'Notifications', href: '#' },
  { name: 'Profile', href: '#' },
  { name: 'Installation', href: '#' }
]

const secondaryMobileMenuItems = [
  { name: 'General', href: "#"},
  { name: 'Logout', href: "#"},
  { name: 'English', href: "#"},
  { name: 'Settings', href: "#"},
  { name: 'Billing & Payments', href: "#"},
]

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {

  console.log(isOpen)

  return (
    <div className={cn("md:hidden transition-all duration-300 ease-in-out relative")}>

      <div className="md:hidden w-full flex flex-col items-end justify-end">

        <button onClick={toggleMenu} className="text-danger focus:outline-none">
          {isOpen ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
        
        <div className={cn("transition-all duration-300 ease-in-out pt-24 bg-white", isOpen ? "h-screen opacity-100" : "h-0 overflow-hidden opacity-0")}>
          <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">

            {mobileMenuItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-danger transition-colors duration-300">{item.name}</a>
            ))}

          </div>

          <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">

            {secondaryMobileMenuItems.map((item) => {
              return <a key={item.name} href={item.href} className="hover:text-danger transition-colors duration-300">{item.name}</a>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu