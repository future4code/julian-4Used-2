import React from 'react'
import styled from 'styled-components'
import Botao from '@material-ui/core/Button'
import RemoveCarrinho from '@material-ui/icons/RemoveShoppingCart'
import IconeAdiciona from '@material-ui/icons/Add';
import IconeRemove from '@material-ui/icons/Remove';

const ProdutoArtigo = styled.article`
display: flex;
width: 80vw;

`
const InfoProduto = styled.div`
display: flex;
flex-direction: column;

`
const DivRemoveCarrinho = styled.div`

`
const DivQuantidade = styled.div`

`
const DivPrecoProdutoIndividual = styled.div`

`

export class CardCarrinho extends React.Component {
  
    render() {
      return <div> 

          <ProdutoArtigo>
              <img src="https://picsum.photos/seed/picsum/100/100" alt="produto1"/>
              <InfoProduto>
                  <h3>nome do Produto</h3>
                  <p>parcelas</p> 
              </InfoProduto>
              <DivRemoveCarrinho>
                  <Botao><RemoveCarrinho/></Botao>
                  <p>Excluir</p>
              </DivRemoveCarrinho>
              <DivQuantidade>
                  <Botao><IconeRemove/></Botao>
                  <input/>
                  <Botao><IconeAdiciona/></Botao>
              </DivQuantidade>
              <DivPrecoProdutoIndividual>R$50.00</DivPrecoProdutoIndividual>
          </ProdutoArtigo>
      </div>
    }
}



   