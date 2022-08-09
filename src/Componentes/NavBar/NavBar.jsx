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
    <header style={styles.header} className="z-depth-5">
      <div style={styles.logo} >
        <Link to="/" > <FlutterDashIcon style={styles.imgLogo} sx={{ fontSize: 80 }}  /></Link>
      </div>
      <nav style={styles.nav} className="z-depth-1">
      {categorias.map((categoria) => 
        <NavLink style={styles.navL} key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
        <Link to="/cart"> <CartWidget /> </Link>
      </nav>
    </header>
  )
}

export default NavBar

const styles = {

  header: {
    backgroundColor: '#ffebee',
    display: 'flex',
    flexDirection: 'column',
    
  },

  logo: {
    display: 'block',
  },

  imgLogo:{
    color: '#ec407a',
    display: 'block',
    margin: '0% auto',
    
  },

  nav:{
    borderRadius: 10,
    backgroundColor: '#ffebee',
    fontSize: 20,
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    
  },

  navL:{
    
    color: '#ec407a',
    
  },

}
