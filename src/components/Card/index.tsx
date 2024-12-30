// importação dos estilos do componente
import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}
const Card = ({ children, title }: Props) => {
  return (
    <S.Card>
      <h2>{title}</h2>
      {children}
    </S.Card>
  )
}

export default Card
