// Importação das bibliotecas
import { useEffect, useState } from 'react'

// Importação dos estilos do componente
import * as S from './styles'

// Importação do tag de destaque
import Tag from '../Tag'
import Button from '../Button'

// Importação da tipagem
import { Game } from '../../Pages/Home'

// importação do conversor de moeda
import { formataPreco } from '../ProductList/Index'

const Baner = () => {
  // Lista de jogos
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque').then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [])

  if (!game) {
    return <h3>Carregando ...</h3>
  }
  return (
    <S.Image
      style={{
        backgroundImage: `url(${game?.media.cover})`
      }}
    >
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Preços>
            De <span>{formataPreco(game?.prices.old)}</span>
            <br /> por apenas {formataPreco(game.prices.current)}
          </S.Preços>
        </div>
        <Button
          type="link"
          to={`product/${game.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveite
        </Button>
      </div>
    </S.Image>
  )
}

export default Baner
