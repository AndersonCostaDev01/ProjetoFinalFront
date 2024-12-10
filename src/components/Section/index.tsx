// importação dos estilos do componente
import * as S from './styles'

export type Props = {
  title: string
  backgroud: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ title, backgroud, children }: Props) => (
  <S.Container backgroud={backgroud}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.Container>
)
export default Section
