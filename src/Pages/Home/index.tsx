// Importação das bibliotecas
import { useEffect, useState } from 'react'
// Importação dos componentes
import Baner from '../../components/Baner'
import ProductList from '../../components/ProductList/Index'

export interface GalerryType {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalerryType[]
  }
}

function Home() {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes').then((res) =>
      res.json().then((res) => setPromocoes(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve').then((res) =>
      res.json().then((res) => setEmBreve(res))
    )
  }, [])
  return (
    <>
      <Baner />
      <ProductList title="Promoções" backgroud="gray" games={promocoes} />
      <ProductList title="Em breve" backgroud="black" games={emBreve} />
    </>
  )
}
export default Home
