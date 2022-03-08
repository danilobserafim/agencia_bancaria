import React from 'react'
import Header from '../components/Header'

import styled from 'styled-components'

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

export default function Transferir() {
  return (
<>
    <Header/>
    <Form>
      <Titulo>Transferêcia</Titulo>
      <Label for='conta'>Conta</Label>
      <Input type='number' id='conta' placeholder='Número da conta'/>
      <Label for='valor'>Valor</Label>
      <Input type='number'  placeholder='Valor' id='valor'/>
      <Button>TRANSFERIR</Button>
    </Form>

</>  )
}

