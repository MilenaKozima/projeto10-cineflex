import styled from "styled-components"
import Session from "./Session"
import Footer from "./Footer"

export default function SessionsPage() {

    return (
        <PageContainer>
            Selecione o horário
            <div>
                <Session />
                <Session />
                <Session />
            </div>

            <Footer/>

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
