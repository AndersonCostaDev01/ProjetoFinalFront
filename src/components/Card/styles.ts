// importaçãodas bibliotecas
import styled from 'styled-components'
// importação das cores do sistema
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }
`
