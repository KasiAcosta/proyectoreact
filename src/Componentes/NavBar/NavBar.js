import React from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import './NavBar.css'
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'

const NavBar = () => {
    return(
       
        <nav className= "pink lighten-1">
            <div className="nav-wrapper">
                <FlutterDashIcon sx={{ fontSize: 70 }} />
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                         <li><a href="sass.html">Sass</a></li>
                         <li><a href="badges.html">Components</a></li>
                         <li><a href="collapsible.html">JavaScript</a></li>
                     </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar


