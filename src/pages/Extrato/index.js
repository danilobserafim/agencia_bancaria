import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import axios from 'axios'


const Content = styled.div`
  max-width: 800px;
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
  align-items: center;
  color: black;
  padding: 8px;
`
const Item = styled.li`
  width: 30%;
  text-align: center;
`



export default function Extrato() {
  const [extrato, setExtrato] = useState([])
  const user = useSelector(state => state.login)
useEffect(async() => {
    const response = await axios.get(`http://localhost:4002/movimentacoes/${user.id_cliente}`)
    setExtrato(response.data)
}, [])

  return (
<>
    <Header/>
    <Content>
      <Titulo>Extrato</Titulo>

    {extrato.map(transacao =>{
      return(
        <Linha>
          <Item>{transacao.data}</Item>
          <Item>RS {parseFloat(transacao.valor).toFixed(2)}</Item>
          <Item>{transacao.tipo}</Item>
        </Linha> 
      )
    })}
    
   
      <Linha>
        <Item><b>Saldo atual</b></Item>
        <Item><b>{parseFloat(user.saldo).toFixed(2).replace(".", ",")}</b></Item>
      </Linha>
    </Content>

</>  )
}
