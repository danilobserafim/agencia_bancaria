import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { login, logout } from '../../../store/actions/loginAction';

const Cabecalho = styled.header`
    display:flex;
    justify-content:space-between;
    align-items: center;
    color: white;
    height: 56px;
    padding: 0 64px;
`
const Menu = styled.ul`
    display:flex;
    justify-content:center;
    list-style:none;
`
const ItemMenu = styled.li` 
    height: max-content;
    padding:8px;
    text-align: center;
    cursor:pointer;

    &:hover{
        text-decoration: underline;
        color:rgb(220, 220, 220);
    }
    @media(max-width: 800px){
        display:none;
    }
    ` 
export default function Header() {
    const user = useSelector(state => state.login)
    const dispatch = useDispatch()
    /*useEffect(async() => {
      const response = await axios.get(`http://localhost:4000/clientes/${user.id_cliente}`);
      dispatch(login(response.data[0]));
    }, []);*/
    
  return (
    <Cabecalho>
        <h1>BANK</h1>
        <Menu>
            <Link href='/Inicio'><ItemMenu>Inicio</ItemMenu></Link>
            <Link href='/Extrato'><ItemMenu>Extrato</ItemMenu></Link>
            <Link href='/Pagar'><ItemMenu>Pagar Conta</ItemMenu></Link>
            <Link href='/Transferir'><ItemMenu>Transferir</ItemMenu></Link>
            <ItemMenu onClick={out}>Sair</ItemMenu>
        </Menu>
        <p>Saldo: R$ {parseFloat(user.saldo).toFixed(2).replace(".", ",")}</p>
    
    </Cabecalho>
  )
  function out() {
      dispatch(logout({}))
      Router.replace("/")
  }
}



