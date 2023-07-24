import styled from "styled-components";
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { colors } from "../../components/colors";
import Seat from "./Seat";
import Form from "./Form";

export default function SeatsPage() {

    const parametros = useParams();

    const [bancos, setBancos] = useState([]);
    const [selecteds, setSelecteds] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.idSessao}/seats`)

        promise.then((resposta) => {
            setBancos(resposta.data);
        })

        promise.catch((erro) => {
            //console.log(erro.response.data);
        })
    }, [])

    function selecionar(seat){
        console.log(seat);
        if (!seat.isAvailable){
            alert('Esse assento não está disponivel')
        } else {
            const selecionado = selecteds.some(sea => sea.id === seat.id);
            if(selecionado){
                const novaLista = selecteds.filter(sea => sea.id !== seat.id);
                setSelecteds(novaLista);
            }else{
                setSelecteds([...selecteds, seat]);
            }

        }
    }

   // console.log(selecteds);

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer data-test="seat">
                {bancos && bancos.seats && bancos.seats.map((seat) => (
                    <Seat colors={colors} selecionado={selecteds.some(sea => sea.id === seat.id)} key={seat.id} seat={seat} selecionar={() => selecionar(seat)}/>
                ))}
            </SeatsContainer>


            <CaptionContainer>
                <CaptionItem >
                    <CaptionCircle status={'selected'} colors={colors} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={'available'} colors={colors}/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={'unavailable'} colors={colors}/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <Form selecteds={selecteds}/>

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
                    {bancos.day?.weekday && (
                        <p>{bancos.day.weekday} - {bancos.name}</p>
                    )}
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
 export const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    color:#293845;
    button {
        align-self: center;
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border-radius: 3px;
        border-color: #E8833A;
        font-family: 'Roboto';
        color:#FFFFFF;
    }
    input {
        width: calc(100vw - 60px);
        border-radius: 3px;
        border-color: #D4D4D4;
        height: 51px;
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
    border: 1px solid ${props => colors[props.status].border};        // Essa cor deve mudar   
    background-color: ${props => colors[props.status].background}; // Essa cor deve mudar
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
 export const SeatItem = styled.div`
    border: 1px solid ${props => colors[props.status].border};        // Essa cor deve mudar   
    background-color: ${props => colors[props.status].background}; // Essa cor deve mudar
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