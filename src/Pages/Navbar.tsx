import { useState } from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {Avatar, AvatarImage, AvatarFallback} from "../components/Avatar"
import Icon from "../components/Icon"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const transition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-600 duration-300 cursor-pointer"

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full py-6 border-b-2 bg-white z-10">
      <div className= "flex flex-row justify-between items-center mx-10">
          
          {/* Left Side */}
          <div className="flex flex-row items-center gap-5">
            <h1 className="font-bold text-3xl text-red-700 cursor-pointer">MijnUI</h1>
            <Input className="hidden md:block lg:w-[800px]" placeholder="Search..."/>
            <Button className="hidden md:block -ml-4 hover:bg-red-700" variant="danger">Search</Button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-red-700 focus:outline-none">
                {isOpen ? (<Icon type="xmark" className="w-6 h-6"/>) : (<Icon type="bars3" className="w-6 h-6"/>)}
            </button>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex flex-row gap-10 items-center">
            <Icon type="envelope" className={`${transition} cursor-pointer`}/>
            <Icon type="bellalert" className={`${transition} cursor-pointer`}/>

            <h1 className="text-xl text-bold cursor-pointer transition ease-in-out delay-150 hover:text-red-700">Orders</h1>
            <Avatar size="md" className={`${transition}`}>
              <AvatarImage className="h-12 w-12 rounded-full cursor-pointer" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"/>
              <AvatarFallback>
                A
              </AvatarFallback>
            </Avatar>
          </div>
      </div>

      {/* Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Home</a>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Docs</a>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Inbox</a>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Notifications</a>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Profile</a>
                <a href="#" className="hover:text-red-500 transition-colors duration-300">Installation</a>
            </div>

            <div className="mt-4 flex flex-col space-y-2 px-10 pb-4">
               <a href="#" className ="text-red-700 text-lg font-semibold">General</a>
               <a href="#" className="hover:text-red-500 transition-colors duration-300">Logout</a>
               <a href="#" className="hover:text-red-500 transition-colors duration-300">English <Icon type="globealt" className="inline"/></a>
               <a href="#" className="hover:text-red-500 transition-colors duration-300">Settings</a>
               <a href="#" className="hover:text-red-500 transition-colors duration-300">Billing & Payments</a>
            </div>
          </div>  
        )}
    </nav>
  )
}

export default Navbar