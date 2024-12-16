// Importação da biblioteca de estilização
import styled from 'styled-components'

// Importação das cores da aplicação
import { cores } from '../../styles'

// IMportação de componentes
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branco};
  display: block;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    display: block;
    height: 260px;
    object-fit: cover;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
