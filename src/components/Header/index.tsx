// Importação dos estilops do componente
import * as S from './styles'

// Importação das imagens
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <img src={logo} alt="Logo EPLAY" />
        <nav>
          <S.Links>
            <S.LinkItem>
              <a href="#">Categoria</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Novidade</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Promoções</a>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.LinkCart href="#">
        0 - Produtos(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </S.LinkCart>
    </S.HeaderBar>
  )
}
export default Header
