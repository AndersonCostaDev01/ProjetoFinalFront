// Importação da biblioteca de estilização
import styled from 'styled-components'
// Importa a biblioteca de rotas
import { Link } from 'react-router-dom'

// Importação da Base de cores
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 16px;
`
