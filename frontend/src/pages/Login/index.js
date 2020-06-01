import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';

export default function Login(){
    return(
        <form className="form">
            <div className="card">    
                <div className="card-top">
                    <img src={Logo}/>
                </div>
                <div className="inputs">
                    <input type="number" placeholder="Matrícula"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>  
                </div>
                
            </div>
        </form>
        
    );
}