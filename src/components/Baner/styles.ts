// Importação da biblioteca de estilização
import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

// Estilização do componente
export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  position: relative;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    background-position: center;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  position: relative;
  z-index: 1;
`
export const Preços = styled.p`
  font-size: 24px;
  margin-top: 24px;
  position: relative;
  z-index: 1;

  span {
    text-decoration: line-through;
  }
`
