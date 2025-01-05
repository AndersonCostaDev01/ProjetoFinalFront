import { Game } from '../Pages/Home' // Importação do tipo Game

// função para somar os itens do carrinho
export const getTotalPrice = (itens: Game[]) => {
  return itens.reduce((total, currentValue) => {
    if (currentValue.prices.current) {
      return total + currentValue.prices.current
    }
    return total
  }, 0)
}
