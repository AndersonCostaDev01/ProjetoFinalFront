// Importação dos commponentes

//  Importação dos estilos globais
import Baner from './components/Baner'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Baner />
    </div>
  )
}

export default App
