// importação de bibliotecas
import styled from 'styled-components'

// importação das cores do sistema
import { cores } from '../../styles'

// Criação de props
type MaxWidthProps = {
  maxWidth?: string
}
type MarginTopProps = {
  marginTop?: string
}
type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<MarginTopProps>`
  display: flex;
  margin-top: 24px;
  column-gap: 24px;
  align-items: flex-end;
  margin-top: ${(props) => props.marginTop || '0'};
`
export const LabelGrup = styled.div<MaxWidthProps>`
  flex: auto;
  position: relative;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${cores.branco};
    font-size: 14px;
  }

  input,
  select {
    margin-top: 8px;
    width: 100%;
    border: 2px solid ${cores.branco};
    padding: 4px 8px;
    align-items: end;
  }

  small {
    display: block;
    color: ${cores.cinzaClaro};
    position: absolute;
    top: 32px;
    right: 8px;
  }

  .error {
    border: 2px solid red;
  }
`
export const Title = styled.h3`
  margin-top: 24px;
`
export const PaymentText = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 24px;
`
export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  background-color: ${(props) =>
    props.isActive ? cores.verde : cores.cinzaClaro};
  color: ${cores.branco};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  margin-right: 24px;
  transition: all 0.2s ease-in-out;

  img {
    margin-right: 8px;
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 24px;
`
