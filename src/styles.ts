import { createGlobalStyle } from 'styled-components'

// cores da aplicação
export const cores = {
  branco: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  cinzaClaro: '#A3a3a3'
}

// estilização global
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;

  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`
