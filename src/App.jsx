import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

    <NavBar />
  
    <Routes>

    <Route path="/" element={<ItemListContainer name = 'Buho Indumentaria' />}/>
    <Route path="/categoria/:categoriaSelec" element={<ItemListContainer name = 'Buho Indumentaria' />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="/cart" element={<Cart />}/>

    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
