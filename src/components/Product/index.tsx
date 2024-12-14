// Importação dos estilos do componente
import * as S from './styles'

// Importação dos componentes
import Tag from '../Tag'

// Criação dos Tipos da Props
type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

function Product({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) {
  // função para resumir a descricao
  const getDescricao = (des: string) => {
    if (des.length > 95) {
      return des.slice(0, 92) + '...'
    }
    return des
  }
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Descricao>{getDescricao(description)}</S.Descricao>
    </S.Card>
  )
}

export default Product
