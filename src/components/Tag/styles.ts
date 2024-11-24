// Importação da biblioteca de estilização
import styled from 'styled-components'

// Importaçãodas cores da aplicação
import { cores } from '../../styles'

// Importação da tipagem da Props
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branco};
  font-size: ${({ size }) => (size === 'small' ? '10px' : '16px')};
  font-weight: bold;
  padding: ${({ size }) => (size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  display: inline-block;
`
