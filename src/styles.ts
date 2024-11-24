import { createGlobalStyle } from 'styled-components'

// cores da aplicação
const cores = {
  branco: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}

// estilização global
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
  }
`
