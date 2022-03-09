import { Link } from "react-router-dom";

import "./Navbar.css"

export const Navbar = () => {
    return(
        <div className="navbar" >
         
           <div className="to_doctors" ><Link to="/doctor" > DOCTORS </Link></div>
           <div className="to_home"><Link to="/" > HOME </Link></div>

        </div>
    )
};