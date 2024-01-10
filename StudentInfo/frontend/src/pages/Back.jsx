import { BsArrowBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Back=({destination='/'})=>{
    return (
        <div className="flex">
            <Link to={destination}
                className="bg-sky-800 text-white px-4 py-1 rounded-1g w-fit">
                    <BsArrowBarLeft className="text-2xl"/>
            </Link>
        </div>
    )
}
export default Back;