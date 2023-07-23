
import {Container} from "./styles";
import {Home} from "./pages/Home"
import {Header} from './pages/Header';
import {Sobre} from './pages/Sobre'
import {Servico} from './pages/Serviços';
import {Depoimentos} from './pages/Depoimentos';
import {Ebook} from './pages/Ebook';
import {Contato} from './pages/Contato';


function App() {
  return (
  <Container>
   <Header  />
   <Home/>
   <Sobre/>
   <Servico/>
   <Depoimentos/>
   <Ebook/>
   <Contato/>
  </Container>
  )
}

export default App;
