// Importação da biblioteca de estilização
import styled from 'styled-components'
// Importa a biblioteca de rotas
import { Link } from 'react-router-dom'
// Importação da Base de cores
import { cores } from '../../styles'
// Importaçãop das props
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.branco : cores.verde};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? 'trasparent' : cores.verde)};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 16px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`
