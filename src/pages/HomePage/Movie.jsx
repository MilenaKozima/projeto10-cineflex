import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"

export default function Movie(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        promise.then((resposta) => {

            setMovies(resposta.data);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    },[])

    if (movies.length === 0){
        return(<div>Carregando ...</div>)
    }



    return (
        <>
          {movies.map((mov) => (
             <MovieContainer key={mov.id} data-test="movie"> 
                <Link to={`/sessoes/${mov.id}`}>
                <img src={mov.posterURL} alt="poster" />
                </Link>
             </MovieContainer>
          ))}
        </>
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