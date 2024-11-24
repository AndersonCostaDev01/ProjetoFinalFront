// Importação dos commponentes

//  Importação dos estilos globais
import Header from './components/Header'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </div>
  )
}

export default App
