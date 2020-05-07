import React from 'react';
import styled from 'styled-components'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import red from '@material-ui/core/colors/red';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../img/4used.png'

const Seletor = styled(TextField)`
  flex-basis:200px;
`

const ranges = [
  { 
  label:"Todos",
  },
  {
    value: 'decoracao',
    label: 'decoração',
  },
  {
    value: 'calcados',
    label: 'calçados',
  },
  {
    value: 'eletronicos',
    label: 'eletrônicos',
  },
  {
    value: 'moveis',
    label: 'móveis',
  },
];

const HeaderFlex = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 2px solid gainsboro;
`

const ImgLogo = styled.img`
    width: 80px;
    cursor: pointer;
`


const Botao1 = styled(Fab)`    
  background-color: #45aaa4;
  color:white;
  font-weight: bold;
  text-transform: none;
  :hover {
    background-color: #248c85;
  }
`

const Botao2 = styled(Fab)` 
  width:100px;
  height:33px; 
  background-color: #f04d3c;
  color:white;
  font-weight: bold;
  text-transform: none;
  :hover {
    background-color: ${red[700]};
  }
`
const Botao3 = styled(Fab)`
  width:90px;
  height:33px;    
  background-color: #fbca64;
  color:white;
  font-weight: bold;
  text-transform: none;
  :hover {
    background-color: #c39725;
  }
`
const DivBotao = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`
class Header extends React.Component {
  state={
    secaoClicada: ''
  }

  atualizaSecaoClicada = (secao) => {
    console.log(secao);
    this.setState({secaoClicada: secao});
  }

  componentDidUpdate = (prevProps) => {
    if(this.state.secaoClicada !== prevProps.estado){
         this.props.mudarSecao(this.state.secaoClicada);
    }
  }

  render() {
    return (
      <HeaderFlex>
        <ImgLogo src={logo} onClick={() => this.atualizaSecaoClicada('')} />
        <Seletor
          select        
          variant="filled"
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Seletor>   
        <Input startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>}
          placeholder="Buscar"
        />

        <DivBotao>
          <Botao1 size="small" variant="extended" onClick={() => this.atualizaSecaoClicada('cadastro')}>quero vender</Botao1>
          <Botao2 variant="extended" onClick={() => this.atualizaSecaoClicada('carrinho')}>carrinho</Botao2>
          <Botao3 variant="extended">entrar</Botao3>
        </DivBotao>
      </HeaderFlex>
    );
  }
}

export default Header;