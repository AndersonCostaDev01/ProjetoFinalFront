// Importação dos componentes
import Product from '../Product'
// Importação dos estilos do componente
import * as S from './styles'
// Importação dos tipos
import { Game } from '../../Pages/Home'

// Criação dos Tipos da Props
export type Props = {
  title: string
  backgroud: 'gray' | 'black'
  games: Game[]
}

// formatar moeda
export const formataPreco = (preco = 0) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

function ProductList({ title, backgroud, games }: Props) {
  // Filtar as tags
  const getGamesTag = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices?.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices?.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }

  return (
    <S.Container backgroud={backgroud}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGamesTag(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
