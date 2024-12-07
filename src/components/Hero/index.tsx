// importação dos estilos do componente
import * as S from './styles'
// importação dos componentes
import Tag from '../Tag'
// importação de imagens
import banner from '../../assets/images/fundo-hogwarts.png'
import Button from '../Button'
const Hero = () => {
  return (
    <S.Bannner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <S.Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>de R$ 250,00</span>
            por R$ 190,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar ao carrinho"
            variant="secondary"
          >
            Adicinar ao carrinho
          </Button>
        </S.Infos>
      </div>
    </S.Bannner>
  )
}

export default Hero
