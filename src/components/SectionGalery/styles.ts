// importação das bibliotecas
import styled from 'styled-components'
// importação das cores de sistema
import { cores } from '../../styles'

export const Itens = styled.ul`
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: ${cores.preto};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.branco};
    border-radius: 8px;
  }
`
export const Active = styled.div`
  background-color: rgba(0, 0, 0, 0.73);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`
export const Item = styled.li`
  margin-right: 16px;
  position: relative;
  > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid ${cores.branco};
  }

  &:hover {
    > ${Active} {
      opacity: 1;
    }
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;

  &.open {
    display: flex;
  }
`

export const ModalContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  > img {
    width: 100%;
    border-radius: 8px;
  }
  img,
  iframe {
    max-width: 100%;
    max-height: 100%;
  }

  iframe {
    border-radius: 8px;
    width: 100%;
    height: 500px;
  }
`
export const ButtonClose = styled.img`
  max-width: 16px;
  width: 16px;
`
