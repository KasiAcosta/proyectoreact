import React from 'react';
import NavBar from './Componentes/NavBar/NavBar.js';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';

const App = () => {
  return (
    <>
    <NavBar />,
    <ItemListContainer name = 'Buho Indumentaria' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
