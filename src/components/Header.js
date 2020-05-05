import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import logo from '../img/4used.png'

const HeaderFlex = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
`

const ImgLogo = styled.img`
    width: 80px;
`

const InputBusca = styled(Input)`
    width: 100px;

`

class Header extends React.Component {
  render(){
    return (
      <HeaderFlex>
        <ImgLogo src={logo} />
        <Input startAdornment={
            <InputAdornment position="start">
                <Search />
            </InputAdornment>}
            placeholder="Buscar"
        />
        <DivButtons>
            <Button>quero vender</Button>
            <Button>meu carrinho</Button>
            <Button>entrar</Button>
        </DivButtons>
      </HeaderFlex>
    );
  }
}

export default Header;