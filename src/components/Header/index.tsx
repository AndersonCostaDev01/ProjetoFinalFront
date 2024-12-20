// Importação de bibliotecas
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// Importação dos estilops do componente
import * as S from './styles'

// Importação das imagens
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

// importação do reducer do carrinho
import { open } from '../../store/reducers/cart'
import { RootState } from '../../store/'

const Header = () => {
  // coloca a função useDispatch na variavel dispatch
  const dispatch = useDispatch()

  // pega os itens do carrinho
  const { itens } = useSelector((state: RootState) => state.cart)

  // função para somar os itens do carrinho
  const totalItens = () => {
    return itens.length
  }

  // funcao para abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }
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
      <S.CartButton onClick={openCart}>
        {totalItens()} - Produtos(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </S.CartButton>
    </S.HeaderBar>
  )
}
export default Header
