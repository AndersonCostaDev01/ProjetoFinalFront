// Importação dos estilos do componente
import * as S from './styles'

// Importação da imagem de fundo
import banner from '../../assets/images/banner-homem-aranha.png'

// Importação do tag de destaque
import Tag from '../Tag'
import Button from '../Button'

const Baner = () => (
  <S.Image
    style={{
      backgroundImage: `url(${banner})`
    }}
  >
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
        <S.Preços>
          De <span>R$ 250,00</span>
          <br /> por apenas R$ 99,90
        </S.Preços>
      </div>
      <Button
        type="link"
        to="/product/1"
        title="Clique aqui para aproveitar a oferta"
      >
        Aproveite
      </Button>
    </div>
  </S.Image>
)

export default Baner
