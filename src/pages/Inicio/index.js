import Header from '../components/Header'

import styled from "styled-components"

const Content = styled.div`
height:91.4vh;
padding: 64px;  
font-size: 72px;
background-image: url(inicio.jpg);
background-position: center;
background-size: cover;
text-shadow: 1px 1px 8px black;
`
const Span = styled.span`
  color: #E97000;
`
export default function Inicio() {

  return (
    <>
      <Header/>
      <Content>Sua agência de <br/>pagamentos <br/><Span>Digitais</Span></Content>
      </>
  )
}
