// Importação dos componentes
import Loader from '../../components/Loader'
import ProductList from '../../components/ProductList/Index'

// importação dos endpoints
import {
  useGetAcaoGamesQuery,
  useGetEsportesGamesQuery,
  useGetSimulacaoGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

function Categories() {
  const { data: gamesAcao } = useGetAcaoGamesQuery()
  const { data: gamesEsportes } = useGetEsportesGamesQuery()
  const { data: gamesSimulacao } = useGetSimulacaoGamesQuery()
  const { data: gamesLuta } = useGetLutaGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()

  if (
    !gamesAcao ||
    !gamesEsportes ||
    !gamesSimulacao ||
    !gamesLuta ||
    !gamesRPG
  ) {
    return <Loader />
  }
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
