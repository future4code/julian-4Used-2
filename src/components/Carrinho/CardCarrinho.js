import React from 'react'
import styled from 'styled-components'
import Botao from '@material-ui/core/Button'
import RemoveCarrinho from '@material-ui/icons/RemoveShoppingCart'
import IconeAdiciona from '@material-ui/icons/Add';
import IconeRemove from '@material-ui/icons/Remove';

const ProdutoArtigo = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
    justify-content: space-evenly;
`
const InfoProduto = styled.div`
    display: flex;
    flex-direction: column;

`
const DivRemoveCarrinho = styled.div`
    padding-top : 19px;
    text-align: center;
`
const DivQuantidade = styled.div`
    padding-top: 40px;
    justify-content: center;
`
const InputQuantidade = styled.input`
    width: 50px;
`
const DivPrecoProdutoIndividual = styled.div`
    padding-top: 20px;
    font-size: 45px;
`

class CardCarrinho extends React.Component {
  
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
                  <InputQuantidade />
                  <Botao><IconeAdiciona/></Botao>
              </DivQuantidade>
              <DivPrecoProdutoIndividual>
                  R$50.00
              </DivPrecoProdutoIndividual>
          </ProdutoArtigo>
      </div>
    }
}

export default CardCarrinho