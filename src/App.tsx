// Importação das bibliotecas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importação dos commponentes
import Baner from './components/Baner'
import Header from './components/Header'

//  Importação dos estilos globais
import { GlobalCss } from './styles'

// Criação das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Baner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
