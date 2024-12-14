// Importação dos componentes
import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList/Index'
import { Game } from '../Home'

function Categories() {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao').then((res) =>
      res.json().then((res) => setGamesAcao(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes').then((res) =>
      res.json().then((res) => setGamesEsportes(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao').then((res) =>
      res.json().then((res) => setGamesSimulacao(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta').then((res) =>
      res.json().then((res) => setGamesLuta(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg').then((res) =>
      res.json().then((res) => setGamesRPG(res))
    )
  }, [])
  return (
    <>
      <ProductList title="Ação" backgroud="black" games={gamesAcao} />
      <ProductList title="Esportes" backgroud="gray" games={gamesEsportes} />
      <ProductList
        title="Simulações"
        backgroud="black"
        games={gamesSimulacao}
      />
      <ProductList title="Luta" backgroud="gray" games={gamesLuta} />
      <ProductList title="RPG" backgroud="black" games={gamesRPG} />
    </>
  )
}
export default Categories
