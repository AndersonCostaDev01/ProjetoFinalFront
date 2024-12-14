// Importação das bibliotecas
import { BrowserRouter } from 'react-router-dom'

// Importação dos commponentes
import Header from './components/Header'
// Importação do componente de rotas
import Rotas from './routes'

//  Importação dos estilos globais
import { GlobalCss } from './styles'
import Footer from './components/Footer'

// Criação das rotas

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
/*
  Api de games
  https://fake-api-tau.vercel.app/api/eplay/esportes
*/
