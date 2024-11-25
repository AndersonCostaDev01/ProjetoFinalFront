// Importação dos componentes
import Product from '../Product'
// Importação dos estilos do componente
import * as S from './styles'

// Criação dos Tipos da Props
export type Props = {
  title: string
  backgroud: 'gray' | 'black'
}

function ProductList({ title, backgroud }: Props) {
  return (
    <S.Container backgroud={backgroud}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="windows"
            title="Nome do jogo"
          />
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
