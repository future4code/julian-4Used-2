import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const DivApp = styled.div`
  text-align: center;
`

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(${props => props.linhas}, 1fr);
    gap: 10px;
    column-gap: 10px;
    justify-content: center;
    margin: 20px auto;
`

class App extends React.Component {
    state={
        listaDeProdutos = []
    }

    componentDidMount = () => {
        pegaListaDeProdutos();
    }

    pegaListaDeProdutos = () =>{
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
            .then(resposta =>{
                return(this.setState({listaDeProdutos: resposta.data}))
            })
            .catch(erro => {
                return alert(`Status do erro: ${error.response.status}\nMensagem: ${error.response.data.message}`)
            })
    }
    
    render(){
        const lista = this.state.listaDeProdutos

        return (
        <DivApp>
            <ContainerProdutos linhas={Math.ceil(lista.length/5)}>
                {/* {lista.map(produto => {
                    return <CardProduto props='(PROPS AQUI)'/>
                })} */}
            </ContainerProdutos>
        </DivApp>
        );
    }
}

export default App;