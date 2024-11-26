// Importação da biblioteca de estilização
import styled from 'styled-components'

// Importação dos typos da Props
import { Props } from './Index'
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
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
