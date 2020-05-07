import React from 'react'
import {CardCarrinho} from './CardCarrinho'
import styled from 'styled-components'

const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: ecnter;
align-itens: center;
`

export class Carrinho extends React.Component {
   
    render() {
        const lista = this.props.lista
        
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