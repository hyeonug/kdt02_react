import { Link } from "react-router-dom"
export default function RouteNav() {
  return (
    <div className="w-9/10 flex justify-center items-center">
      <Link to="/">
        <div className="p-4 m-2 border font-bold hover:bg-amber-200
                     border-amber-800 rounded bg-amber-50">
          Home
        </div>
      </Link>
      <Link to="/p1/m/m">
        <div className="p-4 m-2 border font-bold hover:bg-amber-200
                     border-amber-800 rounded bg-amber-50">
          Page1
        </div>
      </Link>
      <Link to="/p2?item2=m">
        <div className="p-4 m-2 border font-bold hover:bg-amber-200
                     border-amber-800 rounded bg-amber-50">
          Page2
        </div>
      </Link>
    </div>
  )
}
