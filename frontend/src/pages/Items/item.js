import React from 'react';
import Caneta from '../../assets/caneta.jpg';

export default function Item(props){
    const item = props.item;
    return(
        <div  className="item">
            <ul>
                <li>
                    <img src={Caneta} alt="caneta"/>
                    <strong>Objeto:</strong>
                    <p>{item.name}</p>
                    <strong>Descrição</strong>
                    <p>{item.description}</p>
                    <strong>Perdido:</strong>
                    <p>{item.lost}</p> 
                    <button>Excluir</button>
                </li>
            </ul>
        </div>
        
    );
}