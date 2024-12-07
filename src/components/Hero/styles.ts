// Importação da biblioteca de estilização
import styled from 'styled-components'
// Importação das cores do sistema
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Bannner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  // Faz o conteiner tem uma posição relativa
  position: relative;
  // Formata a imagem para ter o tamanho maximo da tela sem se repetir ou se deformar
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  // Definiçoes do conteudo
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin-block: 16px;
  }

  span {
    text-decoration: line-through;
    display: block;
  }
`
