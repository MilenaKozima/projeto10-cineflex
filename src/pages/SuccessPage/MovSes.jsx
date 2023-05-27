import styled from "styled-components"

export default function MovSes(){
    return(
        <TextContainer>
        <strong><p>Filme e sessão</p></strong>
        <p>Tudo em todo lugar ao mesmo tempo</p>
        <p>03/03/2023 - 14:00</p>
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