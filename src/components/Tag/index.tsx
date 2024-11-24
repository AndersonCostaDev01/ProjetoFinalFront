// Importação dos estilos do componente
import * as S from './styles'

// Crioação do typo da Props
export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <S.TagContainer size={size}>{children}</S.TagContainer>
}
export default Tag
