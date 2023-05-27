import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Movie(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        promise.then((resposta) => {
            console.log(resposta.data);
            setMovies(resposta.data);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    },[])

    
    return (
        {movies.map(mov => (
            <MovieContainer>
            <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
            </MovieContainer>
        ))}
    );
}

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`