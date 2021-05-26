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

    const restauranteId = localStorage.getItem('restauranteId');
    const history = useHistory();

   async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            "restauranteResponsavel": restauranteId,
            "nome": nome,
            "descricao": description,
            "valor": value            
        };

        try
        {
            const response = await api.post('restaurantes/produtos', data,{
                    headers: {
                        Authorization: ongId,
                    }
                });

            alert(`Novo caso salvo com sucesso: ${response.data.id}`);

            history.push('/profile');
        }
        catch(err)
        {
            alert('Erro ao cadastrar caso, tente novamente.')
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
                        placeholder="Título do caso" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value} 
                        onChange={e => setValue(e.target.value)} 
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        );

}