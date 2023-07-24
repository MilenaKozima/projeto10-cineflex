import { useState } from "react";
import { FormContainer } from "./SeatsPage";
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios";

export default function Form(props) {

    const { selecteds, bancos, setInfos } = props;
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    function buyer(e) {
        e.preventDefault();

        const novo = {
            ids: selecteds.map(se => se.id),
            name: nome,
            cpf: cpf
        }

        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', novo)
            .then(resp => {
                const infos = {
                    movie: bancos.movie.title,
                    date: bancos.day.date,
                    session: bancos.day.name,
                    seats: selecteds.map(se => `Assentos ${se.name}`),
                    nome: nome,
                    cpf: cpf
                }

                setInfos(infos)
                console.log(infos)

                navigate('/sucesso')
            })
            .catch(erro => alert(erro.response.data.message));
        console.log(novo);
    }

    return (
        <FormContainer onSubmit={buyer}>
            <label htmlFor="nome">Nome do Comprador:</label>
            <input id="nome" data-test="client-name" required
                placeholder="Digite seu nome..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="cpf">CPF do Comprador:</label>
            <input id="cpf" data-test="client-cpf" required
                placeholder="Digite seu CPF..."
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />

            <button data-test="book-seat-btn" type="submit">Reservar Assento(s)</button>


        </FormContainer>
    );
}