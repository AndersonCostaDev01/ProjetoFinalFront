// Importação das bibliotecas externas
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <h2>Produto {id}</h2>
    </div>
  )
}
export default Product
