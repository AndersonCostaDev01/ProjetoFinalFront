// Importação da biblioteca de estilização
import { styled } from 'styled-components'
// Importação das cores do sistema
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
// importação de imagens
import close from '../../assets/images/close-button.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 10;

  &.open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 10;
  padding: 40px 16px 0 16px;
  width: 100%;
  max-width: 360px;

  ${ButtonContainer} {
    width: 100%;
    max-width: 100%;
  }
`
export const Price = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartIten = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 16px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branco};
    font-weight: bold;
    font-size: 16px;
    max-width: 180px;
  }

  span {
    display: block;
    color: ${cores.branco};
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${close});
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-color: transparent;
    height: 16px;
    width: 16px;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
