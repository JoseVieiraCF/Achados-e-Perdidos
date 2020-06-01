import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {mat: '', pass: ''};
        this.handleMat = this.handleMat.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleLogon = this.handleLogon.bind(this);

    }

    handleMat(event){
        this.setState({mat: event.target.value});
    }

    handlePass(event){
        this.setState({pass: event.target.value})
    }
    handleLogon(e){
        e.preventDefault();
        const user = this.state.mat;
        const pass = this.state.pass;
        if(user === '17218071' && pass === 'facema'){
            this.props.history.push('/items');
        }else{
            alert('Matrícula ou senha inválida!');
        }
        
    }

    render(){
        return(
            <form className="form" onSubmit={this.handleLogon}>
                <div className="card">    
                    <div className="card-top">
                        <img src={Logo} alt='Logo'/>
                    </div>
                    <div className="inputs">
                        <input type="number" onChange={this.handleMat} value={this.state.mat} placeholder="Matrícula"/>
                        <input type="password" onChange={this.handlePass} value={this.state.pass} placeholder="Senha"/>
                        <button type="submit" className="buttons">Entrar</button>  
                    </div>
                    
                </div>
            </form>
        );
    }
   
    
}