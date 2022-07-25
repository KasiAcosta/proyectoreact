import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartContext  from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
    <CartContext> 
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer name = 'Buho Indumentaria' />}/>
    <Route path="/category/:categoriaSelec" element={<ItemListContainer name = 'Buho Indumentaria' />}/>
    <Route path="/item/:Id" element={<ItemDetailContainer />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>
    </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
