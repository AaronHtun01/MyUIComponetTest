import {Avatar, AvatarImage, AvatarFallback} from "../components/Avatar"
import { FaStar } from "react-icons/fa";

const Card = () => {

  const avatar = <Avatar size="sm">
                  <AvatarImage className="h-10 w-10 rounded-full" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"/>
                  <AvatarFallback>
                    E
                  </AvatarFallback>
                </Avatar>

  return (
    <div className="ml-8">
      <div className="w-60 shadow-lg rounded-lg p-4">
        <img src="./src/images/cola.jpg" alt="cola" className="rounded"/>

        <div className="flex items-center pt-3">
            {avatar}
            <h1 className="font-semibold ml-3">Emily</h1>
        </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque porro vitae repudiandae nemo quos, </p>
          
          <div className="flex items-center pt-2">
              <FaStar/>
              <h3 className="font-semibold ml-3">5.0</h3>
          </div>
      </div>
    </div>
  )
}

export default Card