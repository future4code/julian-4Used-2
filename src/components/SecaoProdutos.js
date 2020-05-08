import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import CardProduto from './CardProduto'

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
    padding: 90px 50px;
`

class SecaoProdutos extends React.Component {
    state={
        listaDeProdutos: []
    }

    componentDidMount = () => {
        this.pegaListaDeProdutos();
    }

    pegaListaDeProdutos = () =>{
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
            .then(resposta =>{
                return(this.setState({listaDeProdutos: resposta.data.products}))
            })
            .catch(error => {
                console.log(error);
                // return alert(`Status do erro: ${error.response.status}\nMensagem: ${error.response.data.message}`)
            })
    }

    produtoParaCarrinho = (id) =>{
        const produtoParaAdicionar = this.state.listaDeProdutos.find(produto => produto.id === id)
        this.props.adicionarAoCarrinho(produtoParaAdicionar)
    }
    
    render(){
        const lista = this.state.listaDeProdutos

        return (
            <DivApp>
                <ContainerProdutos linhas={Math.ceil(lista.length/5)}>
                    {lista.map(produto => {
                            return <CardProduto 
                                key={produto.id}
                                id={produto.id}
                                valor={produto.price}
                                linkImagem={produto.photos[0]} 
                                nome={produto.name}
                                parcelas={produto.installments}
                                pagamento={produto.paymentMethod}
                                descricao={produto.description}
                                passarCarrinho={this.produtoParaCarrinho}
                            />
                    })}
                </ContainerProdutos>
            </DivApp>
        );
    }
}

export default SecaoProdutos;