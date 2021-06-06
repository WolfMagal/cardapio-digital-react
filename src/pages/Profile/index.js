import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.jpg'

export default function Profile(){

    const [items, setItems] = useState([]);
    const history = useHistory();
    const restauranteID = 1;
    const restauranteNome = 'Restaurante Paulista'
    useEffect(() => {
        const data = [
            {
                id: 1,
                nome: "Saint Peter",
                descricao: "Filet de Saint Peter grelhado de 180 gramas com base de shallots, creme de leite e vinho branco acompanhado de arroz primavera e aspargos grelhados.",
                valor: 59.90,
            },
            {
                id: 2,
                nome: "Feijoada",
                descricao: "Feijoada light.",
                valor: 30.50,
            },
            {
                id: 3,
                nome: "Filet Mignon à Parmegiana",
                descricao: "À milanesa, molho ao sugo e mussarela, batatas fritas e arroz branco.",
                valor: 35.90,
            },
            {
                id: 4,
                nome: "Salmão Mediterrâneo",
                descricao: "Salmão grelhado de 150 gramas com tomatinhos assados à provençal, arroz negro com cogumelos salteados e aspargos grelhados.",
                valor: 67.90,
            }
        ];
        setItems(data);

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
                <Link className="button" hidden="true" >Cadastrar item ao cardápio</Link>
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