import React from 'react';
import './style.css';
import Logo from '../assets/logo.png';

export default function Header(props){
    return(
        <div className="item-container">
                <header>
                    <img src={Logo} alt='Logo'/>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cadastrar objeto</a></li>
                        <li className="btn-sair"><a href="#">sair</a></li>   
                    </ul>
                </header> 
            </div>
    );
}