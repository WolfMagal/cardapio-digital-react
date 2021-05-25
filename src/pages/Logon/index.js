import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';

import api from '../../servers/api';
import axios from 'axios';

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
            const id = '7ecb2061';

                var config = {
                withCredentials: true,
                method: 'get',
                url: 'http://localhost:8080/api/v1/usuarios',
                headers: { 
                    Authorization: 'Basic YWRtaW46YWRtaW4=', 
                    Cookie: 'JSESSIONID=7E30A9B42B3F8719A256E26ACE81625A'
                },
                auth: {
                    username: 'admin',
                    password: 'admin'
                  }
                };

                const response = await axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                console.log(error);
                });

            console.log(response);
            /*const response = await api.get('http://localhost:8080/api/v1/usuarios', {   auth: {
                username: 'admin',
                password: 'admin'
              },
            headers: {
                'Authorization': 'Basic YWRtaW46YWRtaW4=', 
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
            });
            console.log(response);*/
            //const response = await api.get('usuarios');//const response = await api.post('sessions', {id});

            /*var config = {
                method: 'get'
                headers: { 
                    'Authorization': 'Basic YWRtaW46YWRtaW4=', 
                    'Cookie': 'JSESSIONID=1C91581BC2A20DB6DEC572BA9BA8D5E6'
                }
            };*/

            const headers = {
                'Content-Type': "application/json",
                'Authorization': 'Basic YWRtaW46YWRtaW4=',
              };
              const url = "http://localhost:8080/api/v1/usuarios";
            
              //const response = await axios.get(url, { headers });
              //const response = await api.get('usuarios');

            //const response = await api.get('usuarios');//.get('usuarios', config);

            console.log(response);
            //localStorage.setItem('ongId',id);
            //localStorage.setItem('ongName',response.data);
            history.push('/profile');

          
        }
        catch(err)
        {
            alert(err); //'Falha no login, tente novamente.')
            console.log(err);
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