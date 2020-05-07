import React from 'react'
import {CardCarrinho} from './CardCarrinho'
import styled from 'styled-components'

const ContentCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export class Carrinho extends React.Component {
   
    render() {
        // const lista = this.props.lista
        
        return (
        <ContentCards>
        <h2>Meu Carrinho</h2>
        <div>
            {/* {lista.map((produto) => {
            <CardCarrinho nome={produto.name}/>
            })} */}

            <CardCarrinho/>
        </div>
        </ContentCards>
         )}
}