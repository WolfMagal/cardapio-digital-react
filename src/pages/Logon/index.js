import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';

import api from '../../servers/api';

import logoImg from '../../assets/logo.png'
import heroesImg from '../../assets/restaurant.jpg'
export default function Logon(){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useHistory();
    async function handleLogin(e)
    {
        e.preventDefault();

        try
        {
           // const id = '7ecb2061';
            let responseUsuarios = await api.get('usuarios');
            const responseRestaurante = await api.get('restaurantes');

            responseUsuarios = responseUsuarios.data?.filter( u => u.email === email && u.senha === senha);

            if (!responseUsuarios)
            {
                alert('Falha no login, tente novamente ou efetue o casdastro.')
            }
            else{
                localStorage.setItem('usuarioDados',responseUsuarios[0]);
                localStorage.setItem('restauranteDados',responseRestaurante.data[0]);
                history.push('/profile');
            }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Senha"
                    type="password"
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                   <FiLogIn size={16} color="#E02041"/>
                   Não tenho cadastro
               </Link>
            </form>
            </section>
            <img src={heroesImg} alt="Restaurante"/>
        </div>

    );
}