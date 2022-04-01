// instalar o styled.components: npm install --save styled-components
import { Bemvindo, Container, Head, Titulo } from './styles';

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

    <Bemvindo cor="ff0000" tamanho={35}>
      Bem Vindo ao sistema!
    </Bemvindo>

    </Container>
  );
}

export default App;

/*
Exemplo css:

    <div className="container">
      
      <header className='header'>
        <a className='titulo'>Projeto Styled</a>
      </header>

      <h1>
        Bem Vindo ao sistema!
      </h1>

    </div>
*/
