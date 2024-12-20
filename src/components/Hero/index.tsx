// importação de biblioteca
import { useDispatch } from 'react-redux'
// importação dos estilos do componente
import * as S from './styles'
// importação dos componentes
import Tag from '../Tag'
// importação de imagens
import Button from '../Button'
// importação da tipagem
import { Game } from '../../Pages/Home'
// importação de função de conversor de moeda
import { formataPreco } from '../ProductList/Index'
// importação do reducer
import { add, open } from '../../store/reducers/cart'
// Criação dos Tipos da Props
type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <S.Bannner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current ? (
              <>por apenas {formataPreco(game.prices.current)}</>
            ) : (
              <>Valor Em breve ...</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              variant="secondary"
              onClick={addToCart}
            >
              Adicinar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Bannner>
  )
}

export default Hero
