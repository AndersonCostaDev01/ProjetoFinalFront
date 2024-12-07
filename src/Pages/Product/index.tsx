// Importação das bibliotecas externas
import { useParams } from 'react-router-dom'
// Importação dos componentes
import Hero from '../../components/Hero'

const Product = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <Hero />
    </>
  )
}
export default Product
