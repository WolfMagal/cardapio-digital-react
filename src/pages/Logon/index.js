import React from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';


import logoImg from '../../assets/logo.png'
import heroesImg from '../../assets/restaurant.jpg'
export default function Logon(){
    const email = "admin@gmail.com";
    const senha = "admin";
    const history = useHistory();
    async function handleLogin(e)
    {
        e.preventDefault();

        try
        {
            history.push('/profile');

        }
        catch(err)
        {
            alert('Falha no login, tente novamente.')
        }
    }

    return(
        
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Cardápio Digital"/>
            <form onSubmit={handleLogin}> 
                <h1>Faça seu logon</h1>
                <input 
                    placeholder="Email"
                    value={email} 
                />
                <input 
                    placeholder="Senha"
                    type="password"
                    value={senha}
                />
                <button className="button" type="submit">Entrar</button>
            </form>
            </section>
            <img src={heroesImg} alt="Restaurante"/>
        </div>

    );
}