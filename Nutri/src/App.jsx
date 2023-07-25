
import {Container} from "./styles";
import {Home} from "./pages/Home"
import {Header} from './pages/Header';
import {Sobre} from './pages/Sobre'
import {Servico} from './pages/Serviços';
import {Depoimentos} from './pages/Depoimentos';
import {Ebook} from './pages/Ebook';
import {Contato} from './pages/Contato';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function App() {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 100,
      reset: true
    });
  
    scrollReveal.reveal(".text, .card, p, a, .title", { interval: 50 });
  
    // Limpar ScrollReveal ao desmontar o componente
    return () => {
      scrollReveal.destroy();
    };
  }, []);
  return (
  <Container >
   <Header/>
   <Home />
   <Sobre /> 
   <Servico/>
   <Depoimentos/>
   <Ebook/>
   <Contato/>
  </Container>
  )
}

export default App;
