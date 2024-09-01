import { Link } from "react-router-dom";

export default function Page404(){
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-6xl mb-9 font-bold">404 Page not found</h1>
            <p className="font-bold text-blue-700"><Link to="/">Go Back Home</Link></p>
        </div>
    )
}