// Importação da biblioteca de estilização
import styled from 'styled-components'

// Importaçãodas cores da aplicação
import { cores } from '../../styles'

type IsActive = {
  isActive: boolean
}

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul<IsActive>`
  display: flex;
  margin-left: 40px;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 8888;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    background-color: ${cores.cinza};
    top: 150px;
    padding: 16px;
    width: 80%;
    left: 0;
    right: 0;
    border-radius: 8px;
    text-align: center;

    li {
      margin-bottom: 16px;
      position: relative;
      z-index: 9999;
    }
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`
export const MenuHamburger = styled.div`
  img {
    cursor: pointer;
    display: none;
    width: 24px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
