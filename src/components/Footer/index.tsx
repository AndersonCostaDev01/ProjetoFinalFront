// Importação dos estilos do componente
import * as S from './styles'

function Footer() {
  const anoAtual = new Date().getFullYear()
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link>RPG</S.Link>
            </li>
            <li>
              <S.Link>Ação</S.Link>
            </li>
            <li>
              <S.Link>Aventura</S.Link>
            </li>
            <li>
              <S.Link>Esportes</S.Link>
            </li>
            <li>
              <S.Link>simulação</S.Link>
            </li>
            <li>
              <S.Link>FPS</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        {/*  */}
        <S.FooterSection>
          <S.SectionTitle>Acesso Rapido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link>Novidades</S.Link>
            </li>
            <li>
              <S.Link>Promoções</S.Link>
            </li>
            <li>
              <S.Link>Em Breve</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <p>{anoAtual} - &copy; EPLAY - Todos os direitos reservados</p>
        </S.FooterSection>
      </div>
    </S.Container>
  )
}
export default Footer
