// importação de componentes
import { PacmanLoader } from 'react-spinners'
// importação de cores do sistema
import { cores } from '../../styles'
// importação dos estilos do componente
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={cores.branco} />
    </Container>
  )
}
export default Loader
