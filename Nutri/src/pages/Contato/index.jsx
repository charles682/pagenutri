import {Container} from './style'
import {Button} from '../../Componentes/Button'
import { FaWhatsapp } from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import { BsTelephone} from 'react-icons/bs';
import {MdOutgoingMail } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai'

export function Contato(){

    return(
    <Container>
        <section className="section" id="contact">
        <div className="container grid">
          <div className="text">
            <h2 className="title">Entre em contato com a gente!</h2>
            <p>
              Entre em contato com a  <span>DRA. Cristiane Umbelina</span>, que iremos  tirar suas dúvidas.
            </p>
            <a href="https://api.whatsapp.com/send?phone=5538997415323&text=Ol%C3%A1%20Doutora%20Cristiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos!" target='_blank'>
            <Button>
               <FaWhatsapp color='#ffff'/> 
               Entrar em contato
           </Button>
                   
           </a>
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
        <p className="Programador">@2023 <a href="https://www.instagram.com/charlesm3lo/" target="_blank">Charles Melo</a> todos direitos reservados.</p>
        <div className='icons'> 
          <a href='https://www.instagram.com/charlesm3lo/' target='_blank'>
                <FiInstagram color='#fafafa' fontSize='1.5rem' />
              </a>
              <a
                href='https://wa.me/5538998735130?text=Ol%C3%A1+gostaria+de+mais+informa%C3%A7%C3%B5es%21'
                target='_blank'
              >
                <FaWhatsapp color='#fafafa' fontSize='1.5rem' />
              </a>
              <a href="https://www.linkedin.com/in/charlesmelosa/">
                <AiFillLinkedin color='#fafafa' fontSize='1.5rem' />
              </a> 

        </div>
      </div>
    

            
    </Container>

    );
}



