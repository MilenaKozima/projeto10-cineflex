import styled from "styled-components";
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function SeatsPage() {

    const parametros = useParams();
    console.log(parametros);

    const [bancos, setBancos] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.idSessao}/seats`)

        promise.then((resposta) => {
            console.log(resposta.data);
            setBancos(resposta.data);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, [])


    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer data-test="seat">
                {bancos && bancos.seats && bancos.seats.map((seat) => (
                    <SeatItem key={seat.id}>{seat.name}</SeatItem>
                ))}
            </SeatsContainer>


            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input data-test="client-name" placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input data-test="client-cpf" placeholder="Digite seu CPF..." />


                <Link to={`/sucesso`}>
                <button>Reservar Assento(s)</button>
                </Link>

            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    {bancos.movie?.posterURL && (
                        <img src={bancos.movie.posterURL} alt="poster" />
                    )}
                </div>
                <div>
                    {bancos.movie?.title && (
                        <p>{bancos.movie.title}</p>
                    )}
                    {bancos.days?.weekday && (
                        <p>{bancos.days.weekday}</p>
                    )}<p> - {bancos.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
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
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`