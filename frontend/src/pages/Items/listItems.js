import React from 'react';
import './style.css';
import Item from './item';

export default function ListItems(){

    const data = [
        {
            id: 1,
            name: "Caneta",
            description: "Caneta Azul",
            lost: "Próximo ao banheiro"
        },
        
    ]

    const items = data.map(item => 
        <Item key={item.id} item={item}/>
    );

    return(
        <div className="list-items">
           {items}
        </div>
    );
}
