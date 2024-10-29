import { GoProjectRoadmap } from "react-icons/go";
import Categories from "../components/Categories";
import Card from "../components/Card";
const Home = () => {

  return (
    <div className="pt-16">
      <div id="backgroundImage">
        <img src="./src/images/image2.jpg" alt="backgroundImage" className="w-full h-44 object-cover"/>
        <h1 className="absolute top-32 left-10 text-surface-text text-3xl font-bold ">Welcome to MijnUI, John Doe</h1>
      </div>

      <div className="border-slate-200 w-[1300px] bg-surface rounded-lg ml-16 relative bottom-10 shadow-md">
        <div className="flex justify-between p-8 items-center">
          <div className="flex items-center">
            <GoProjectRoadmap className="text-3xl"/>

            <div className="mx-4">
              <h3 className="font-medium text-lg">Post a project breif <span className="text-sm bg-info py-1 px-2 rounded-md mx-2 text-surface">Beta</span></h3>
              <p>Get tailored offers for you needs.</p>
            </div>
          </div>

          <button className="bg-danger text-main py-2 px-4 rounded">Get Started</button>
        </div>
      </div>

      <h1 className="text-3xl font-bold ml-16">Starting Building Your App Now</h1>

      <div className="flex">
        <Categories />

    
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home