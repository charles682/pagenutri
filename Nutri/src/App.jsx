
import {Container} from "./styles";
import {Home} from "./pages/Home"
import {Header} from './pages/Header';
import {Sobre} from './pages/Sobre'
import {Servico} from './pages/Serviços';
import {Depoimentos} from './pages/Depoimentos';
import {Ebook} from './pages/Ebook';
import {Contato} from './pages/Contato';
import React, { useEffect }  from 'react';
import ScrollReveal from 'scrollreveal';

function App() {
  
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 200,
      reset: true
    });

    const revealElements = () => {
      scrollReveal.reveal("#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, .consulta, #contact .links, #ebook .Links, #ebook .imageBook", { interval: 50});
    };

    const revealTimeout = setTimeout(revealElements, 100);
    return () => {
      scrollReveal.
     
destroy();
      clearTimeout(revealTimeout);
    };
  }, []);

  
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
