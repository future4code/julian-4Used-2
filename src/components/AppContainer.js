import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import SecaoProdutos from './SecaoProdutos'
// import { Carrinho } from './Carrinho/Carrinho'
import QueroVender from './QueroVender/queroVender'

const DivApp=styled.div`
  
`

export class AppContainer extends Component {
  state={
    secaoAtual: 'inicio',
    listaCarrinho: []
  }

  componentDidUpdate = () => {
    localStorage.setItem("carrinho", JSON.stringify(this.state.listaCarrinho))
  }

  componentDidMount = () => {
    const resgataCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if(resgataCarrinho !== null){
      this.setState({listaCarrinho: resgataCarrinho})
    }
  }

  adicionarAoCarrinho = (produtoParaAdicionar) => {
    let lista = [...this.state.listaCarrinho];
    let existe = this.state.listaCarrinho.findIndex((produto) => produto.id === produtoParaAdicionar.id);
    if(existe > -1){
        lista[existe].quantidade++;
    }
    else{
      produtoParaAdicionar.quantidade=1;
      lista.push(produtoParaAdicionar);
    }
    
    this.setState({listaCarrinho: lista})
  }

  mudarSecao = (secaoClicada) => {
    this.setState({secaoAtual: secaoClicada});
  }

  render() {
    switch(this.state.secaoAtual){
      case 'inicio':
        return (
          <DivApp>
            <Header estado={this.state.secao} mudarSecao={this.mudarSecao} />
            <SecaoProdutos adicionarAoCarrinho={this.adicionarAoCarrinho} />
          </DivApp>
        )
      case 'cadastro':
        return (
          <DivApp>
            <Header estado={this.state.secao} mudarSecao={this.mudarSecao} />
            <QueroVender />
          </DivApp>
        )
      case 'carrinho':
        return (
          <DivApp>
            <Header estado={this.state.secao} mudarSecao={this.mudarSecao} />
            {/* <Carrinho lista={this.state.listaCarrinho}/> */}
            carrinho
          </DivApp>
        )
    }
  }
}