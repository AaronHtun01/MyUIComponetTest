import {Input} from "../components/Input"
import {Button} from "../components/Button"
const LeftSide = () => {
  return (
    <div className="flex flex-row items-center gap-5">
        <h1 className="font-bold text-3xl text-danger cursor-pointer">MijnUI</h1>
        <Input className="hidden md:block lg:w-[800px]" placeholder="Search..."/>
        <Button className="hidden md:block -ml-4 hover:bg--danger" variant="danger">Search</Button>
  </div>
  )
}

export default LeftSide