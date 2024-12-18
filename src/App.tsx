// Importação das bibliotecas
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Importação dos commponentes
import Header from './components/Header'
import Footer from './components/Footer'

// Importação do componente de rotas
import Rotas from './routes'

// Importação da store
import store from './store'

//  Importação dos estilos globais
import { GlobalCss } from './styles'

// Criação das rotas

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
/*
  Api de games
  https://fake-api-tau.vercel.app/api/eplay/esportes
*/
