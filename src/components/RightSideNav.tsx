import {Avatar, AvatarImage, AvatarFallback} from "../components/Avatar"
import { MdOutlineMail } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import clsx from 'clsx'

export default function RightSideNav() {

  const transition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-600 duration-300 cursor-pointer"
  const transitionClasses = transition.split(' ')

  return (
    <div className="hidden md:flex flex-row gap-10 items-center">
            <MdOutlineMail type="envelope" className={clsx(transitionClasses, 'cursor-pointer')}/>
            <IoNotificationsOutline type="bellalert" className={clsx(transitionClasses, 'cursor-pointer')}/>

            <h1 className="text-xl text-bold cursor-pointer transition ease-in-out delay-150 hover:text-danger">Orders</h1>
            <Avatar size="md" className={clsx(transition)}>
              <AvatarImage className="h-12 w-12 rounded-full cursor-pointer" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"/>
              <AvatarFallback>
                A
              </AvatarFallback>
            </Avatar>
          </div>
  )
}
