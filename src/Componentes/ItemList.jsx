import React from "react";
import Item from './Item';

const Itemlist = ({productos}) => {
    return(
        <>
       {
        productos.map(producto => <Item producto={producto}/>)
       }
        </>);
};

export default Itemlist