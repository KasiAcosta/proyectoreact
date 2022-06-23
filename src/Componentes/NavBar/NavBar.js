import React from 'react'
import Logo from '../../assets/logo.jpeg'
import './NavBar.css'
import './CartWidjet'
import CartWidjet from './CartWidjet'
const NavBar = () => {
    return(
        <header style={styles.contenedor}>
        <img style={styles.imagen} src={Logo} alt="logo" />
        <h1>Buho Indumentaria</h1>
        <nav style={styles.navStyle}>
            <a style={styles.anchor} href="">Inicio</a>
            <a style={styles.anchor} href="">Tienda</a>
            <a style={styles.anchor} href="">Nosotros</a>
        </nav>
        <CartWidjet />
        </header>
    )
}

export default NavBar

const styles = {

contenedor:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Koulen', 
    backgroundColor: 'black',
    color: '#f185d1 ',
},
navStyle:{
    display: 'flex',
    justifyContent: 'space-between',
},

anchor:{
    paddingLeft: 5,
    textDecoration: 'none',
},
imagen:{
    width: '10%',
}
}
