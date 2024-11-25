// Importação das bibliotecas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importação dos commponentes
import Baner from './components/Baner'
import Header from './components/Header'

//  Importação dos estilos globais
import { GlobalCss } from './styles'
import ProductList from './components/ProductList/Index'

// Criação das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Baner />
        <ProductList title="Promoções" backgroud="gray" />
        <ProductList title="Em breve" backgroud="black" />
      </>
    )
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
