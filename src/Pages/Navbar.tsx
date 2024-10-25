import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {Avatar, AvatarImage, AvatarFallback} from "../components/Avatar"
import Icon from "../components/Icon"

const Navbar = () => {

  const transition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-600 duration-300 cursor-pointer"

  return (
    <nav>
      <div className= "flex flex-row justify-between items-center fixed top-0 w-full py-6 border-b-2">
          
          {/* Left Side */}
          <div className="flex flex-row gap-5 mx-10">
            <h1 className="font-bold text-3xl text-red-700 cursor-pointer">MijnUI</h1>
            <Input className="lg:w-[800px]" placeholder="Search..."/>
            <Button className="-ml-4 hover:bg-red-700" variant="danger">Search</Button>
          </div>

          {/* Right Side */}
          <div className="flex flex-row gap-10 items-center mx-10">
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
    </nav>
  )
}

export default Navbar