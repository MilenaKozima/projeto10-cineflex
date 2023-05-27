import styled from "styled-components"

export default function(){
    return(
        <TextContainer>
        <strong><p>Comprador</p></strong>
        <p>Nome: Letícia Chijo</p>
        <p>CPF: 123.456.789-10</p>
    </TextContainer>
    );
}

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`