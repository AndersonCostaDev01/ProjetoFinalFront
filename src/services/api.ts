// importação de bibliotecas
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// importação da tipagem
import { Game } from '../Pages/Home'

// criação do tipo para produtos
type Product = {
  id: number
  price: number
}
// criação de tipos para os endpoints
type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    // Criação dos endpoints (Locais onde serao feitas as requisicoes)
    // getFeturdGame: endpoint que busca o jogo de destaque
    getFeturdGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    // getOnSale: endpoint que busca os jogos em promocao
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    // getSoon: endpoint que busca os jogos em breve
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    // getCategories: endpoint que busca as categorias dos jogos
    // ação
    getAcaoGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    // esportes
    getEsportesGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    // simulacao
    getSimulacaoGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    // luta
    getLutaGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    // rpg
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    // getGame: endpoint que busca um jogo especifico atraves do id
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    //
    // post para compras
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// Exportação dos endpoints criados pelo createApi
export const {
  useGetFeturdGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetAcaoGamesQuery,
  useGetEsportesGamesQuery,
  useGetSimulacaoGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api

// Exportação da api
export default api
