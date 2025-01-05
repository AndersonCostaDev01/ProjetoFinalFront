// importação de biblioteca
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'
// importação dos estilos do componente
import Button from '../Button'
import Tag from '../Tag'
// importação dos estilos do componente
import * as S from './styles'
// importação do reducer
import { close, remove } from '../../store/reducers/cart'
// importação da funçaõ de conversor de moeda
import { formataPreco } from '../ProductList/Index'
// importação de função de pegar valor
import { getTotalPrice } from '../../utils/getPrice'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const removeIten = (id: number) => {
    dispatch(remove(id))
  }
  // função para somar os itens do carrinho
  const totalItens = () => {
    return itens.length
  }

  const goToCheckout = () => {
    closeCart()
    if (itens.length > 0) {
      navigate('/checkout')
    } else {
      alert('Seu carrinho esta vazio')
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {itens.map((itens) => (
            <S.CartIten key={itens.id}>
              <img
                src={itens.media.thumbnail}
                alt="Imagem do jogo no carrinho"
              />
              <div>
                <h3>{itens.name}</h3>
                <Tag>{itens.details.category}</Tag>
                <Tag>{itens.details.system}</Tag>
                <span>{formataPreco(itens.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeIten(itens.id)} />
            </S.CartIten>
          ))}
        </ul>
        <S.Quantity>{totalItens()} jogos no carrinho</S.Quantity>
        <S.Price>
          total de {formataPreco(getTotalPrice(itens))}{' '}
          <span>em ate 6x sem juros</span>
        </S.Price>
        <Button
          title="Clique aqui para continuar a compra"
          type="button"
          variant="secondary"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
