// importação de bibliotecas
import { useState } from 'react'
// importação dos estilos do componente
import * as S from './styles'
// importação das imagens
import imgHL from '../../assets/images/imghl.png'
import zoom from '../../assets/images/mais-zoom.svg'
import play from '../../assets/images/botao-play.svg'
import close from '../../assets/images/close-button.svg'
// importação dos componentes
import Section from '../Section'
// Importação de interfaçe de tipos
import { GalerryType } from '../../Pages/Home'

// Criação de um mock generico de dados para testes
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

// Criação de uma interface de tipos

interface ModalState extends GalerryType {
  isVisible: boolean
}

const SectionGalery = ({ defaultImage, name }: Props) => {
  //
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })
  // Função para obter o cover da midia
  const getMediaCover = (item: GalerryType) => {
    if (item.type === 'image') return item.url
    return defaultImage
  }
  // Função para obter o icone da midia
  const getMediaIcon = (item: GalerryType) => {
    if (item.type === 'image') return zoom
    return play
  }
  // Função para fechar o modal
  const closeModal = () => {
    setModal({
      type: 'image',
      url: '',
      isVisible: false
    })
  }

  return (
    <>
      <Section backgroud="black" title="Galeria">
        <S.Itens>
          {mock.map((item, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({
                  type: item.type,
                  url: item.url,
                  isVisible: true
                })
              }}
            >
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
      <S.Modal className={modal.isVisible ? 'open' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <S.ButtonClose
              src={close}
              alt="Botão para fechar"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
          {/* <img src={defaultImage} alt="Imagem do jogo Hogwarts Legacy" /> */}
        </S.ModalContent>
      </S.Modal>
    </>
  )
}
export default SectionGalery
