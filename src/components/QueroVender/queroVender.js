// Imports De Componentes React
import React from 'react';
import Header from '../Header';

// Imports de Libs Para Desenvolvimento
import styled, { ThemeConsumer } from 'styled-components'

//imports para Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const HeaderFlex=styled.header`
 height:70vh
 width:100vw;
 display:flex;
 flex-direction:column;
 align-items:center;
 position:relative;
 top:100px;
`

const BlocoInput=styled.div`
width:60vw;
padding:20px
`

const TextoVendas=styled.h3`
font-size: 1.3em;
margin-right:540px
`

const TextoCategorias=styled.h4`
margin-right:690px
`

const TextoFotos=styled.h4`
margin-right:727px
`

const TextoPreco=styled.h4`
margin-right:538px
`

const MetodosDePagamento=styled.div`
display:flex;
flex-direction:column;
position:relative;
right:316px;
`

const QuantidadeDeParcela=styled.div`
display:flex;
flex-direction:column;
position:relative;
bottom: 114px;
right:40px
`

const ButtonConcluir=styled.div`
position:relative;
left:220px;
bottom:165px;
`

class QueroVender extends React.Component{
    render() {
        return(
            // div criada pra englobar o Header
            <div>
              <Header/>
            
            <HeaderFlex>
               <TextoVendas><h3>Cadastro de Produto</h3> </TextoVendas>
             
             <BlocoInput>
             <TextField 
               label="Titulo * "
               fullWidth
               variant="outlined"
              />
              
              <TextField
              label="Descrição *"
              fullWidth
              multiline
              rowsMax="20"
              variant="outlined"
              />
              </BlocoInput>

              <div>
                <TextoCategorias> <h4>Categorias *</h4> </TextoCategorias>

                <TextField
                    select
                    label="01"
                    variant="outlined"
                    value={""}
                    SelectProps={{
                        MenuProps: {
                        },
                }}/>
                 
                 </div>

              <div>
                 <TextoFotos> <h4>Fotos *</h4></TextoFotos>
                  <TextField
                  placeholder= {'Cole a URL Da Foto'}
                  variant="outlined"
                  />
              </div>

              <TextoPreco>
                  <TextField
                  placeholder={'Preço (R$)'}
                  type="number"
                  variant="outlined"
                  />
              </TextoPreco>

              <MetodosDePagamento>
               <h5>Metodo De Pagamento</h5>

               <TextField
                    select
                    label="Nenhum"
                    variant="outlined"
                    value={""}
                    SelectProps={{
                        MenuProps: {
                        },
                }}/>
              
              </MetodosDePagamento>

              <QuantidadeDeParcela>
                <h5>Quantidade De Parcelas</h5>
             
                <TextField
                    select
                    label="QTD Parcelas"
                    variant="outlined"
                    value={""}
                    SelectProps={{
                        MenuProps: {
                        },
                }}/>
              </QuantidadeDeParcela>

              <ButtonConcluir>
                <label>
                  <Button variant="extendedFab" size="medium" component="span">
                   Concluir
                  </Button>
                </label>
              </ButtonConcluir>

          
            </HeaderFlex>
            </div>
        )
    }
}

export default QueroVender