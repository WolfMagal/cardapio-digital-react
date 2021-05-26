import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.jpg'
import api from '../../servers/api';

export default function Profile(){

    const [cardapio, setCardapio] = useState([]);
    const history = useHistory();
    const usuarioDados = localStorage.getItem('usuarioDados');
    const restauranteDados = localStorage.getItem('restauranteDados');
    const restauranteID = restauranteDados.id;
/*localStorage.setItem('usuarioDados',responseUsuarios[0]);
                localStorage.setItem('restauranteDados',responseRestaurante.data[0]);
                */
    useEffect(() => {
        api.get(`restaurantes/produtos/${restauranteDados.id}`,{
            headers: {
                Authorization: restauranteID,
            }
        }).then( response =>{
            setCardapio(response.data);
        } )

    }, [restauranteID]);

   /* async function handleDeleteIncident(id){
        try
        {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            //Fire Code - Font ligatures
            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(err)
        {
            alert('Erro ao deletar caso, tente novamente.');
        }

    }*/

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Cardápio Digital"/>
                <span>Bem vindo, {restauranteDados.nome}</span>
                <Link className="button" to="/items/new">Cadastrar item ao cardápio</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={16} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map( incident => (
                    <li key={incident.id}>
                        <strong>Item:</strong>
                        <p>{incident.nome}</p>
    
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.descricao}</p>
    
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.valor)}</p>
    
                    </li>
                 ))}
            </ul>
        </div>
    );
}

/*
                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
*/