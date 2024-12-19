// Importação das bibliotecas externas
import { useParams } from 'react-router-dom'
// Importação dos componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import SectionGalery from '../../components/SectionGalery'
// Importação dos endpoints
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  // Busca o jogo usando o endpoint do RTKQuery
  const { data: game } = useGetGameQuery(id!)

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
