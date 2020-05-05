import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'

const DivApp=styled.div`
  
`

export class AppContainer extends Component {
  state={
    secaoAtual: 'inicio'
  }
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
            <Header />
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
