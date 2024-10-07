import { Link, Outlet } from "react-router-dom"
import '../Wrapper/Wrapper.css'
function Wrapper() {
  return (
   <>
        <div className="wrapper">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/overview" className="link">Overview</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="Container">
                <Outlet/>
            </div>
        </div>
   </>
  )
}

export default Wrapper