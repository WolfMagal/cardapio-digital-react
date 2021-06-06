import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.jpg'
import api from '../../servers/api';

export default function Profile(){

    const [items, setItems] = useState([]);
    const history = useHistory();
    const restauranteID = localStorage.getItem('restauranteID');
    const restauranteNome = localStorage.getItem('restauranteNome');
    useEffect(() => {
        api.get(`restaurantes/produtos/${restauranteID}`)
        .then( response =>{
            setItems(response.data);
        } )

    }, [restauranteID]);

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Cardápio Digital"/>
                <span>Bem vindo, {restauranteNome}</span>
                <Link className="button" to="/items/new">Cadastrar item ao cardápio</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={16} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Itens cadastrados</h1>
            <ul>
                {items.map( item => (
                    <li key={item.id}>
                        <strong>Item:</strong>
                        <p>{item.nome}</p>
    
                        <strong>Descrição:</strong>
                        <p>{item.descricao}</p>
    
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(item.valor)}</p>
    
                    </li>
                 ))}
            </ul>
        </div>
    );
}