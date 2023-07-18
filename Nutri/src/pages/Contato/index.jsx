import {Container} from './style'
import {Button} from '../../Componentes/Button'
import { FaWhatsapp } from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import { BsTelephone} from 'react-icons/bs';
import {MdOutgoingMail } from 'react-icons/md';

export function Contato(){

    return(
    <Container>
        <section className="section" id="contact">
        <div className="container grid">
          <div className="text">
            <h2 className="title">Entre em contato com a gente!</h2>
            <p>
              Entre em contato com a DR. Cristiane Umbelina, que iremos  tirar suas dúvidas.
            </p>
            <Button>
               <FaWhatsapp color='#ffff'/>
               <a href="https://api.whatsapp.com/send?phone=5538997415323&text=Ol%C3%A1%20Doutora%20Cristiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos!"></a>
               Entrar em contato
           </Button>
          </div>

          <div className="links">
            <ul className="grid">
              <li><BsTelephone color='#6ab99d' fontSize="1.5rem"/>38999301259</li>
              <li><ImLocation color='#6ab99d' fontSize="1.5rem"/>Praça Joaquim Capuchinho 336, Indaiabira-MG</li>
              <li><MdOutgoingMail color='#6ab99d' fontSize="1.5rem"/>cristianeumbelina@gmail.com</li>
            </ul>
          </div>

          
        </div>
      </section>
      <div className="direitos">
        
        <p className="Programador"> @2023 <a href="https://www.instagram.com/charlesm3lo/" target="_blank">Charles Melo</a> todos direitos reservados.</p>
      </div>
    

      <div className="divider-1"></div>            
    </Container>

    );
}



