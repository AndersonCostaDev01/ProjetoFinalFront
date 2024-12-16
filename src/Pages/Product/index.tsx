// Importação das bibliotecas externas
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Importação dos componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import SectionGalery from '../../components/SectionGalery'
// Importação da tipagem
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`).then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [id])

  if (!game) {
    return <h3>Carregando ...</h3>
  }
  return (
    <>
      <Hero game={game} />
      <Section backgroud="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section backgroud="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b>
          {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo:{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <SectionGalery
        defaultImage={game.media.cover}
        name="{game.name}"
        itens={game.media.gallery}
      />
    </>
  )
}
export default Product
