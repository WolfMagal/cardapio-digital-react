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

        try
        {
            const usuario = await api.post('usuarios', dataUsuario);
            const restaurante = await api.post('restaurantes', dataRestaurante);

            alert(`Seu Email de acesso: ${usuario.data.email} e o nome do seu restaurante: ${restaurante.data.nome}` );

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
                    required
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} onChange={e => setEmail(e.target.value)}
                    required
                />
                 <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} onChange={e => setSenha(e.target.value)}
                    required
                />
                <input 
                    placeholder="Endereço" 
                    value={endereco} 
                    onChange={e => setEndereco(e.target.value)} 
                    required
                />
                <div className="input-group">

                <input 
                    placeholder="Numero" 
                    style={{ width: 150}} 
                    value={numero} onChange={e => setNumero(e.target.value)}
                    required
                />
                <input 
                    placeholder="Complemento" 
                    value={complemento} 
                    onChange={e => setComplemento(e.target.value)} 
                    required
                />
                </div> 
                <input 
                    placeholder="Bairro" 
                    value={bairro} onChange={e => setBairro(e.target.value)}
                    required
                />
                <div className="input-group">
                    <input 
                        placeholder="Cidade" 
                        value={city} 
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                    <input 
                        placeholder="UF" 
                        style={{ width: 80}} 
                        value={uf} onChange={e => setUF(e.target.value)}
                        required
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}