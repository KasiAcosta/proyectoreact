import React from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  const categorias = [
    { name: "electronics", id: 0, route: "/category/electronics" },
    { name: "jewelery", id: 1, route: "/category/jewelery" },
    { name: "men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "women's clothing", id: 3, route: "/category/women's clothing" },
  ];
  return (
    <header style={styles.header}>
      <Link to="/" > <FlutterDashIcon sx={{ fontSize: 70 }} /> </Link>
      <h1 style={styles.titulo}>Buho Tienda</h1>
    <nav>

      {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
      <Link to="/cart"> <CartWidget /> </Link>

    </nav>
    </header>
  )
}

export default NavBar

const styles = {

  header:{
    backgroundColor: '#f3e5f5',
    display: 'flex',
    flexdirection: 'row',
  },

  titulo:{
    fontfamily:'Koulen',
  }

}
