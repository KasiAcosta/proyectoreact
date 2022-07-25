import React from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import './NavBar.css'
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const categorias = [
        { name: "electronics", id: 0, route: "/category/electronics" },
        { name: "jewelery", id: 1, route: "/category/jewelery" },
        { name: "men's clothing", id: 2, route: "/category/men's clothing" },
        { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    ] ;
    return(

  <div class="nav-wrapper">
    <Link to="/" class="brand-logo"> <FlutterDashIcon sx={{ fontSize: 70 }} /> </Link>
    <nav id="nav-mobile" class="right hide-on-med-and-down">
      {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
      </nav>
      <Link to="/cart"> <CartWidget /> </Link>
  </div>



    )
}

export default NavBar


