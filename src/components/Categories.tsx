import { cn } from "../utils"
import { AiOutlineBook } from "react-icons/ai"
import { MdOutlineWidgets } from "react-icons/md"
import { BsPaletteFill } from "react-icons/bs"
import { MdOutlineCode } from "react-icons/md"
const Categories = () => {

  const categoryAlignment = "flex flex-row items-center gap-4 text-xl font-medium text p-4 border-b border-slate-200 hover:text-danger"

  return (
    <div className="pt-16 ml-16 w-60">
        <div className="flex flex-col">
            <a href="#" className={cn(categoryAlignment)}><AiOutlineBook/>Docs</a>
            <a href="#" className={cn(categoryAlignment)}><MdOutlineWidgets/>Components</a>
            <a href="#" className={cn(categoryAlignment)}><BsPaletteFill/>Themes</a>
            <a href="#" className={cn(categoryAlignment)}><MdOutlineCode/>Examples</a>
        </div>
    </div>
  )
}

export default Categories
