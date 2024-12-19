// importação de bibliotecas
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// importação da tipagem
import { Game } from '../Pages/Home'

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
    })
  })
})

// Exportação dos endpoints criados pelo createApi
export const { useGetFeturdGameQuery, useGetOnSaleQuery, useGetSoonQuery } = api

// Exportação da api
export default api
