// Importação da biblioteca de estilização
import styled from 'styled-components'

// Importação dos typos da Props
import { Props } from '.'
// Importaçãop das cores do sistema
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${({ backgroud }) =>
    backgroud === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${({ backgroud }) =>
      backgroud === 'black' ? cores.cinza : cores.preto};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
