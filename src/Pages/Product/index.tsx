// Importação das bibliotecas externas
import { useParams } from 'react-router-dom'
// Importação dos componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import SectionGalery from '../../components/SectionGalery'
// Importação das imagens
import img from '../../assets/images/fundo-hogwarts.png'

const Product = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      <Hero />
      <Section backgroud="black" title="Sobre o jogo">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section backgroud="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche SoftwareEditora: Portkey Games,
          subsidiária da Warner Bros. Interactive Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <SectionGalery defaultImage={img} name="Hogwarts Legacy" />
    </>
  )
}
export default Product
