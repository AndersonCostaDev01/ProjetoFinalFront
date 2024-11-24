// Importação dos estilos do componente
import * as S from './styles'

// Importação da imagem de fundo
import banner from '../../assets/images/banner-homem-aranha.png'

const Baner = () => (
  <S.Image
    style={{
      backgroundImage: `url(${banner})`
    }}
  >
    <div className="container">
      <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
      <S.Preços>
        De <span>R$ 250,00</span>
        <br /> por apenas R$ 99,90
      </S.Preços>
    </div>
  </S.Image>
)

export default Baner
