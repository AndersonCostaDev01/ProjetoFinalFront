// Importação do models
import Game from '../../Models/Game'
// Importação dos componentes
import Product from '../Product'
// Importação dos estilos do componente
import * as S from './styles'

// Criação dos Tipos da Props
export type Props = {
  title: string
  backgroud: 'gray' | 'black'
  games: Game[]
}

function ProductList({ title, backgroud, games }: Props) {
  return (
    <S.Container backgroud={backgroud}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
