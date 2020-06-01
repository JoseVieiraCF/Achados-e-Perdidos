import React from 'react';
import './style.css';
import Logo from '../assets/logo.png';

export default function Header(props){
    return(
        <div className="item-container">
                <header>
                    <img src={Logo} alt='Logo'/>
                    <span>Bem vindo, {props.name}</span>
                    <button className="btn-sair">Sair</button>
                </header>
            </div>
    );
}