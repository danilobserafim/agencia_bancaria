import { useState, useSelector } from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../store/actions/loginAction"
import Router from 'next/router'

import styled from "styled-components"




const Form = styled.form`
  max-width: 400px;
  height: 60vh;
  margin: 10% auto;
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

const Forgot = styled.a`
  display, block;
  text-align center;
  color:rgb(150,150,150)
`



export default function Home() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const dispatch = useDispatch()



  return (
    <>
      <Form onSubmit={submit}>

        <Titulo>LOGIN</Titulo>

        <Label htmlFor='email'>E-mail</Label>
        <Input type='email' placeholder='E-mail' id='email' name='email' onChange={() => setEmail(event.target.value)}/>

        <Label htmlFor='senha'>Senha</Label>
        <Input type='password' placeholder='Senha' id='senha' name='senha' onChange={()=>setSenha(event.target.value)} />

        <Button>ENTRAR</Button>
        <Forgot href='#'>Esqueci a senha</Forgot>

      </Form>

      </>
  )
  async function submit(e) {
    e.preventDefault()
    const credentials = {email: email, senha: senha};
    const response = await fetch('http://localhost:4000/clientes/login', 
    {method: "POST", 
    mode:'cors',
    credentials: 'same-origin',
    headers:{
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin':	'*'
    }, 
    body:JSON.stringify(credentials)
    })
    const data = await response.json();
    if (!response.status) {
      alert("Algo deu errado") 

    }
    else{
      dispatch(login(data))
      Router.replace('/Inicio') 
    }
  }
}
