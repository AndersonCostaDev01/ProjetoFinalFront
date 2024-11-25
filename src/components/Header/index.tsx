// Importação de bibliotecas
import { Link } from 'react-router-dom'
// Importação dos estilops do componente
import * as S from './styles'

// Importação das imagens
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="Logo EPLAY" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link to={'/categorias'}>Categorias</Link>
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
