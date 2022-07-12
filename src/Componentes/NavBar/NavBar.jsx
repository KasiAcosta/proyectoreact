import React from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import './NavBar.css'
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const categorias = [
        { name: "electronics", id: 0, route: "/categoria/electronics" },
        { name: "jewelery", id: 1, route: "/categoria/jewelery" },
        { name: "men's clothing", id: 2, route: "/categoria/men's clothing" },
        { name: "women's clothing", id: 3, route: "/categoria/women's clothing" },
    ] 
    return(

        <nav>
  <div class="nav-wrapper">
    <a href="" class="brand-logo"><Link to="/"> <FlutterDashIcon sx={{ fontSize: 70 }} /> </Link></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>{categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}</li>
      <li><Link to="/cart"> <CartWidget /> <span class="new badge">4</span></Link></li>
    </ul>
  </div>
</nav>


    )
}

export default NavBar


