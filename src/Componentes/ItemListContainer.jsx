import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (prop) => {

  const { categoriaSelec } = useParams();
  const { name } = prop;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const consulta = categoriaSelec
      ? query(collection(db, 'productos'), where('category', '==', categoriaSelec))
      : collection(db, 'productos');

    getDocs(consulta)
      .then(result => {
        const lista = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProductos(lista);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [categoriaSelec]);


  return (
    <>
      <h2 className="z-depth-2" style={styles.subTitulo}>
        En {name} vas a encontrar todo lo que buscas
      </h2>
      {loading ? <p>cargando...</p> : <Itemlist productos={productos} />}


    </>
  )
}

export default ItemListContainer

const styles = {

  subTitulo: {
    textAlign: 'center',
    fontFamily: 'Koulen',
    backgroundColor: '#ec407a',
    color: '#ffebee',
  },

}
