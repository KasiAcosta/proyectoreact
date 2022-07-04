import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import Itemlist from "./ItemList";


const listadoProductos = [
    {id:0, title:'remera', description:'a rayas', price: 1200, pricture: 'image1'},
    {id:1, title:'camisa', description:'roja', price: 3000, pricture: 'image2'},
    {id:2, title:'pantalon', description:'verde', price: 2500, pricture: 'image3'},
    {id:3, title:'bolso', description:'playero', price: 7500, pricture: 'image4'},
    {id:4, title:'gorro', description:'vaquero', price: 2800, pricture: 'image5'},
    {id:5, title:'short', description:'rosa', price: 9200, pricture: 'image6'},

]

const promes = new Promise ((res,rej) => {
    setTimeout(() => {
        res(listadoProductos)
    }, 4000);
})

const ItemListContainer =  (prop) => {
    const { name } = prop;
    const [productos, setProductos] = useState([]);

    const [loading, setLoadin] = useState (false);
    
    useEffect(() =>{
        setLoadin(true);
        promes.then((data)=>{
            setLoadin(false);
            console.log(data)
            setProductos(data)
        }).catch((data) =>{
            console.log('error')
        })
    },[]);

    if (loading){
        return(
            <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        );
    }

    return (
        <>
        <h2 class="z-depth-2" style={styles.subTitulo}>
          En {name} vas a encontrar todo lo que buscas
        </h2>

        <Itemlist productos={productos}/>
        <ItemCount stock = {8} initial = {1}/>
        </>
    )
}

export default ItemListContainer

const styles = {

    subTitulo:{
        textAlign: 'center',
        fontFamily: 'Koulen', 
        backgroundColor: '#ec407a',
        color: '#ffebee',
    },
   
    }
    