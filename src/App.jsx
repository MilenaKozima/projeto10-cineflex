import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function App() {

    const[infos, setInfos] = useState({});

    axios.defaults.headers.common['Authorization'] = 'lf0vsDDXdvPlJTOlIi0QncJw';

    return (
        <BrowserRouter>
           <NavContainer>
            <Link to='/'>CINEFLEX</Link>
            </NavContainer>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/sessoes/:idFilme' element={<SessionsPage />}/>
                <Route path='/assentos/:idSessao' element={<SeatsPage infos={infos} setInfos={setInfos} />}/>
                <Route path='/sucesso' element={<SuccessPage infos={infos} />}/>
            </Routes>

        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
        font-family: 'Roboto', sans-serif;
    }
`
