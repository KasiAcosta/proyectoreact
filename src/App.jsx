import React from 'react';
import NavBar from './Componentes/NavBar/NavBar.js';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer.jsx';

const App = () => {
  return (
    <>
    <NavBar />,
    <ItemListContainer name = 'Buho Indumentaria' />
    </>
  );
}

export default App;
