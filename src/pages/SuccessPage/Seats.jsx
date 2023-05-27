import styled from "styled-components"

export default function Seats(){
    return(
        <TextContainer>
        <strong><p>Ingressos</p></strong>
        <p>Assento 01</p>
        <p>Assento 02</p>
        <p>Assento 03</p>
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