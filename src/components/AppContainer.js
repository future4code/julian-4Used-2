import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import QueroVender from './QueroVender/queroVender'



const DivApp=styled.div`
  
`

export class AppContainer extends Component {
  state={
    secaoAtual: 'cadastro'
  }

//  onClickMudaDePagina=()=> {
//     return(
//     this.setState({secaoAtual:'cadrasto' })
//     )
//   }
  
  render() {
    switch(this.state.secaoAtual){
      case 'inicio':
        return (
          <DivApp>
            <Header />
          </DivApp>
        )
      case 'cadastro':
        return (
          <DivApp>
            <QueroVender />
          </DivApp>
        )
      case 'carrinho':
        return (
          <DivApp>
            <Header />
          </DivApp>
        )
    }
  }
}
