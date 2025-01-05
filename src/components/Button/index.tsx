// impotação de estilos da pagina ]
import * as S from './styles'

// Criação dos Tipos da Props
export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}
const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} variant={variant}>
      {children}
    </S.ButtonLink>
  )
}
export default Button
