import React from 'react';
import Caneta from '../../assets/caneta.jpg';

export default function Item(){
    return(
        <div>
            <ul >
                <li>
                    <img src={Caneta} alt="caneta"/>
                  
                    <strong>Objeto:</strong>
                    <p>Caneta azul</p>
                    <strong>Descrição</strong>
                    <p>Caneta azul bla bla bla</p>
                    <strong>Perdido:</strong>
                    <p>Próximo ao banheiro</p>
                    
                </li>
            </ul>
        </div>
    );
}