// IMportação dos models
import Game from '../../Models/Game'
// Importação dos componentes
import Baner from '../../components/Baner'
import ProductList from '../../components/ProductList/Index'
// Importação das imagens
import residentEvil4 from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: residentEvil4,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'Ficção Científica',
    description:
      'Star Wars: Battlefront é um jogo de ação baseado no universo Star Wars que permite batalhas épicas...',
    title: 'Star Wars: Battlefront',
    system: 'PlayStation',
    image: starWars,
    infos: ['20%', 'R$ 199,00']
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Diablo é uma série de jogos de RPG de ação que envolve batalhas contra hordas de demônios...',
    title: 'Diablo IV',
    system: 'Windows',
    image: diablo,
    infos: ['15%', 'R$ 299,00']
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'The Legend of Zelda é uma série de jogos de aventura focada em exploração, enigmas e batalhas...',
    title: 'The Legend of Zelda: Breath of the Wild',
    system: 'Nintendo Switch',
    image: zelda,
    infos: ['25%', 'R$ 349,00']
  }
]
const emBreve: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: residentEvil4,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'Ficção Científica',
    description:
      'Star Wars: Battlefront é um jogo de ação baseado no universo Star Wars que permite batalhas,epicas...',
    title: 'Star Wars: Battlefront',
    system: 'PlayStation',
    image: starWars,
    infos: ['20%', 'R$ 199,00']
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'The Legend of Zelda é uma série de jogos de aventura focada em exploração, enigmas e batalhas...',
    title: 'The Legend of Zelda: Breath of the Wild',
    system: 'Nintendo Switch',
    image: zelda,
    infos: ['25%', 'R$ 349,00']
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Diablo é uma série de jogos de RPG de ação que envolve batalhas contra hordas de demônios...',
    title: 'Diablo IV',
    system: 'Windows',
    image: diablo,
    infos: ['15%', 'R$ 299,00']
  }
]

function Home() {
  return (
    <>
      <Baner />
      <ProductList title="Promoções" backgroud="gray" games={promocoes} />
      <ProductList title="Em breve" backgroud="black" games={emBreve} />
    </>
  )
}
export default Home
