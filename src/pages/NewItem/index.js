import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.png'
import api from '../../servers/api';

export default function NewIncident(){

    const [nome, setNome] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const restauranteId = localStorage.getItem('restauranteID');
    const history = useHistory();

   async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            "restauranteResponsavel": restauranteId,
            "nome": nome,
            "descricao": description,
            "valor": value.replace(',','.')            
        };

        try
        {
            const response = await api.post('restaurantes/produtos', data);

            alert(`Novo caso salvo com sucesso: ${response.data.id}`);

            history.push('/profile');
        }
        catch(err)
        {
            alert('Erro ao cadastrar item no cardápio, tente novamente.')
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Cardápio Digital"/>
                    <h1>Cadastrar novo item</h1>
                    <p>Descreva detalhadamente o item para incluir ao seu cardápio.</p>
                    <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16} color="#E02041"/>
                       Voltar para home
                   </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Nome do item" 
                        required
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        required
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        required
                        value={value} 
                        type="number"
                        onChange={e => setValue(e.target.value)} 
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        );

}