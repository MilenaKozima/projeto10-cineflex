import styled from "styled-components";
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function SessionsPage() {

    const parametros = useParams();
    console.log(parametros);

    const [sess, setSess] = useState(undefined);

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${parametros.idFilme}/showtimes`

        const teste = axios.get(url)

        teste.then((resposta) => {
            setSess(resposta.data);
        })

        teste.catch((erro) => {
            //console.log(erro.response.data);
        })
    }, [])

    if (sess === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o horário
            <div data-test="movie-day">
                {sess.days.map((ses) => (
                    <SessionContainer key={ses.date} data-test="movie-day">
                        <div>{ses.weekday} - {ses.date}</div>

                        <ButtonsContainer key={ses.showtimes.id} data-test="movie-day">
                            {ses.showtimes.map((showtime) => (
                                <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                                    <button data-test="showtime">{showtime.name}</button>
                                </Link>
                            ))}
                        </ButtonsContainer>
                    </SessionContainer>
                ))}

            </div>

            <FooterContainer data-test="footer">
                <div>
                    <img src={sess.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sess.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
        background-color: #E8833A;
        border-radius: 3px;
        width: 83px;
        height: 43px;
        border-color: #E8833A;
    }
    a {
        text-decoration: none;
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            font-family: 'Roboto', sans-serif;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`
