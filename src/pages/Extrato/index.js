import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'


const Content = styled.div`
  max-width: 500px;
  height: 60vh;
  margin: 5% auto;
  background: white;
  border-radius:10px;
  color: #E97000;
  padding: 32px 0;

`
const Titulo = styled.h2`
  margin:16px 0;
  text-align:center
`

const Linha = styled.ul`
  list-style: none;
  width: 80%;
  border-bottom: 1px solid gray;
  margin: 4px auto;
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 8px;
`
const Item = styled.li`
  width: 30%;
  text-align: center;
`


export default function Extrato() {
  return (
<>
    <Header/>
    <Content>
      <Titulo>Extrato</Titulo>
    <Linha>
        <Item>Data</Item>
        <Item>Valor</Item>
        <Item>Tipo</Item>
      </Linha> 
      <Linha>
        <Item>06/05</Item>
        <Item>R$2.500,00</Item>
        <Item>Depósito</Item>
      </Linha> 
      <Linha>
        <Item>07/06</Item>
        <Item>R$700,00</Item>
        <Item>Pagamento</Item>
      </Linha>
      <Linha>
        <Item>07/06</Item>
        <Item>R$1.500,00</Item>
        <Item>Depósito</Item>
      </Linha>
      <Linha>
        <Item>08/06</Item>
        <Item>R$1.700,00</Item>
        <Item>Depósito</Item>
      </Linha>   
      <Linha>
        <Item><b>Saldo atual</b></Item>
        <Item><b>R$ 5.000,00</b></Item>
      </Linha>
    </Content>

</>  )
}
