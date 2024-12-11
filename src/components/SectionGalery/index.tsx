// importação dos estilos do componente
import * as S from './styles'
// importação das imagens
import imgHL from '../../assets/images/imghl.png'
import zoom from '../../assets/images/mais-zoom.svg'
import play from '../../assets/images/botao-play.svg'
import close from '../../assets/images/close-button.svg'
// importação dos componentes
import Section from '../Section'

type GalerryType = {
  type: 'image' | 'video'
  url: string
}

const mock: GalerryType[] = [
  {
    type: 'image',
    url: imgHL
  },
  {
    type: 'image',
    url: imgHL
  },
  {
    type: 'image',
    url: imgHL
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=7jchLgWDGbGF9Ovu'
  }
]

// criação da props
type Props = {
  defaultImage: string
  name: string
}

const SectionGalery = ({ defaultImage, name }: Props) => {
  const getMediaCover = (item: GalerryType) => {
    if (item.type === 'image') return item.url
    return defaultImage
  }
  const getMediaIcon = (item: GalerryType) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section backgroud="black" title="Galeria">
        <S.Itens>
          {mock.map((item, index) => (
            <S.Item key={index}>
              <img
                src={getMediaCover(item)}
                alt={`Midia ${index + 1} da galeria de ${name}`}
              />
              <S.Active>
                <img
                  src={getMediaIcon(item)}
                  alt="Clique para ampliar a midia"
                />
              </S.Active>
            </S.Item>
          ))}
        </S.Itens>
      </Section>
      <S.Modal>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Botão para fechar" />
          </header>
          <S.ImageOpen
            src={defaultImage}
            alt="Imagem do jogo Hogwarts Legacy"
          />
        </S.ModalContent>
      </S.Modal>
    </>
  )
}
export default SectionGalery
