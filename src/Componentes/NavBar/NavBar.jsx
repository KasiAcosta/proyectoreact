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
        <nav className= "pink lighten-1">
            
            <Link to="/"> <FlutterDashIcon sx={{ fontSize: 70 }} /> </Link>
            {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
            
            <Link to="/cart"> <CartWidget /> </Link>
        </nav>

    )
}

export default NavBar


