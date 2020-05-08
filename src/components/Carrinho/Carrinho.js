import React from 'react'
import CardCarrinho from './CardCarrinho'
import styled from 'styled-components'

const CardContent = styled.div`
    display: block;

`
const DivApp = styled.div`
  padding-top: 80px;
  margin: 0 20%;
`
const TituloCarrinho = styled.div`
    text-align: center;
    margin: 3% 0;
`
class Carrinho extends React.Component {
    render() {        
        return (
        <CardContent>
        <h2>Meu Carrinho</h2>
        <div>
            {/* {lista.map((produto) => {
            <CardCarrinho nome={produto.name}/>
            })} */}

            <CardCarrinho/>
        </div>
        </CardContent>
         )}
}
