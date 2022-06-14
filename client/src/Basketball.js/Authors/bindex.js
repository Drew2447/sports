import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const Authors = ()=>{
    return (
        <div>
            <div class='navbar'>
              <Link to='/authors'>Authors</Link>
              <Link to='/authors/new'>New Author</Link>
            </div>
            <div>
               <Outlet />
            </div>
           
        </div>
    )
}

export default Authors