import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.png';

import api from '../../servers/api';

export default function Register() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[endereco, setEndereco] = useState('');
    const[numero, setNumero] = useState('');
    const[complemento, setComplemento] = useState('');
    const[bairro, setBairro] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUF] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();

        const dataUsuario ={
            "email": email,
            "senha": senha,
            "endereco": {
                "logradouro": endereco,
                "numero": numero,
                "cidade": city,
                "bairro": bairro,
                "uf": uf,
                "complemento": complemento
            }
        };

        const dataRestaurante ={
            "nome": name,
            "produtosDisponiveis": []
        };
        
        /*const data ={
                name,
                email,
                senha,
                endereco,
                city,
                uf
        };*/

        try
        {
            const getUsuario = await api.get('api/v1/usuarios');

            console.log(getUsuario);

            const usuario = await api.post('api/v1/usuarios', dataUsuario);

           /* const usuario = await api.post('http://localhost:8080/api/v1/usuarios', dataUsuario, {
                headers: {
                    'Authorization': 'Basic YWRtaW46YWRtaW4=', 
                    'Content-Type': 'application/json', 
                    'Cookie': 'JSESSIONID=D038DA7FFD963082B22165CC27596C5A'
                }
            });*/
            const restaurante = await api.post('restaurantes', dataRestaurante, {
                headers: {
                    'Authorization': 'Basic YWRtaW46YWRtaW4=', 
                    'Content-Type': 'application/json', 
                    'Cookie': 'JSESSIONID=D038DA7FFD963082B22165CC27596C5A'
                }
            });

            alert(`Seu Email de acesso: ${usuario.data.email} e o nome do seu restaurante:  ${restaurante.data.nome}` );

            history.push('/');
        }
        catch(err)
        {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Cardápio Digital"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e crie seu cardápio digital</p>
                <Link className="back-link" to="/">
                   <FiArrowLeft size={16} color="#E02041"/>
                   Não tenho cadastro
               </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome do Restaurante" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                 <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} onChange={e => setSenha(e.target.value)}
                />
                <input 
                    placeholder="Endereço" 
                    value={endereco} 
                    onChange={e => setEndereco(e.target.value)} 
                />
                <div className="input-group">

                <input 
                    placeholder="Numero" 
                    style={{ width: 150}} 
                    value={numero} onChange={e => setNumero(e.target.value)}
                />
                <input 
                    placeholder="Complemento" 
                    value={complemento} 
                    onChange={e => setComplemento(e.target.value)} 
                />
                </div> 
                <input 
                    placeholder="Bairro" 
                    value={bairro} onChange={e => setBairro(e.target.value)}
                />
                <div className="input-group">
                    <input 
                        placeholder="Cidade" 
                        value={city} 
                        onChange={e => setCity(e.target.value)} 
                    />
                    <input 
                        placeholder="UF" 
                        style={{ width: 80}} 
                        value={uf} onChange={e => setUF(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}