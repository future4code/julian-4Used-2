import React from 'react'
import styled from 'styled-components'


const ArticleProduto = styled.article`
display: flex;
width: 80vw;

`

export class CardCarrinho extends React.Component {
  
    render() {
      return <div> 

          <ArticleProduto>
              <img src="https://picsum.photos/seed/picsum/100/100" alt="produto1"/>
              <div>
                  <h3>nome do </h3>
                  <p>parcela</p> 
              </div>
              <div>icone de retirar do carrinho</div>
              <div>quantidade</div>
              <div>Preco</div>
          </ArticleProduto>
      </div>
    }
}



   