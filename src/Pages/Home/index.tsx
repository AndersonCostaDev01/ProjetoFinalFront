// // Importação das bibliotecas
// import { useEffect, useState } from 'react'
// Importação dos componentes
import Baner from '../../components/Baner'
import Loader from '../../components/Loader'
import ProductList from '../../components/ProductList/Index'

// Importação dos endpoints
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  // Busca os jogos usando o endpoint do RTKQuery
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (!promocoes || !emBreve) {
    return <Loader />
  }
  return (
    <>
      <Baner />
      <ProductList title="Promoções" backgroud="gray" games={promocoes} />
      <ProductList title="Em breve" backgroud="black" games={emBreve} />
    </>
  )
}
export default Home
