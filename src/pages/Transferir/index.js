import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {login} from '../../store/actions/loginAction'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Form = styled.form`
  max-width: 400px;
  height: 60vh;
  margin: 5% auto;
  background: white;
  border-radius:10px;
  color: #E97000;
  display:flex;
  flex-direction: column;
  justify-content: center;
`
const Titulo = styled.h2`
  text-align:center;
  margin-bottom: 16px;
`

const Label = styled.label`
  margin: 4px 0 0 6%;
`

const Input = styled.input`
  padding: 8px 16px;
  width: 90%;
  margin: 8px 5%;
  border-radius: 10px;
`
const Select = styled.select`
  padding: 8px 16px;
  width: 90%;
  margin: 8px 5%;
  border-radius: 10px;
`
const Button = styled.button`
padding: 8px 16px;
width: 90%;
margin: 16px 5%;
color: white;
border: none;
background: #E97000;
border-radius: 10px;
cursor: pointer;
&:hover{
  filter: brightness(0.9);
}
`

export default function Transferir() {
  const user = useSelector(state => state.login)
  const [conta, setConta] = useState(0)
  const [valor, setValor] = useState(0)
  const [contas, setContas] = useState([])
  const dispatch = useDispatch()
 useEffect(async () => {
  const response = await axios.get("http://localhost:4002/clientes");
  const data = await response.data;
  setContas(data);
 }, [])
 
  return (
<>
    <Header />
    <Form onSubmit={submit}>
      <Titulo>Transferêcia</Titulo>
      <Label htmlFor='conta'>Conta</Label>
      
      <Select onChange={() => setConta(event.target.value)} id='conta'>
        <option>Clientes</option>
        {contas.map((conta) => { return (<option key={conta.id_cliente} value={conta.id_cliente}>{conta.nome_completo}</option>)})}
      </Select>

      
      <Label htmlFor='valor'>Valor</Label>
      <Input type='number'  placeholder='Valor' id='valor' value={valor} onChange={() => setValor(event.target.value)} min="0" max="3000" step={0.01}/>
      <Button>TRANSFERIR</Button>
    </Form>

</>  )
async function submit(e) {
  e.preventDefault()
  const credentials = {
    id_remetente:	user.id_cliente,
    id_destinatario:	conta,
    valor:	valor,
    tipo:	"transferencia"
  }
  const response = await fetch('http://localhost:4002/movimentacoes/', 
  {method: "POST", 
  mode:'cors',
  credentials: 'same-origin',
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin':	'*'
  }, 
  body:JSON.stringify(credentials)
  })
  if (response.status === 200) {
    setConta(0)
    setValor(0)
    user.saldo = user.saldo - valor
    dispatch(login(user))
  }

}
}

