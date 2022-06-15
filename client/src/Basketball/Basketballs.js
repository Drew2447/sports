import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const basketballs = ()=>{
    return (
        <div>
            <div className='navbar'>
              <Link to='/Basketballs'>Basketballs</Link>
              <Link to='/Basketballs/new'>New Basketball</Link>
            </div>
            <div>
               <Outlet />
            </div>
           
        </div>
    )
}

export default basketballs