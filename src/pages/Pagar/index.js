import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../store/actions/loginAction'


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
export default function Pagar() {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [conta, setConta] = useState(0)
  const [valor, setValor] = useState(0)
  return (
<>
    <Header/>
    <Form onSubmit={submit}>
      <Titulo>Pagar conta</Titulo>
      <Label htmlFor='boleto'>Boleto</Label>
      <Input type='number' placeholder='Número do boleto' id='boleto' value={conta} onChange={()=>setConta(event.target.value)}/>
      <Label htmlFor='valor'>Valor</Label>

      <Input type='number' placeholder='Valor do boleto' id='valor' value={valor} onChange={()=>setValor(event.target.value)}/>
      <Button>PAGAR</Button>

    </Form> 
</> )
async function submit(e) {
  e.preventDefault()
  const credentials = {
    id_remetente:	user.id_cliente,
    id_destinatario:	conta,
    valor:	valor,
    tipo:	"Pagamento"
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
