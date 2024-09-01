import { Link } from "react-router-dom";

export default function User() {
  return (
    <div>
        <h1 className="font-bold text-3xl text-center mb-7">
            Welcome to users page
        </h1>
        <ul>
            <li className="hover:text-blue-600"><Link to={'/users/irshad'}>Irshad</Link></li>
            <li className="hover:text-blue-600"><Link to={'/users/furqan'}>Furquan</Link></li>
        </ul>
    </div>
  )
}
