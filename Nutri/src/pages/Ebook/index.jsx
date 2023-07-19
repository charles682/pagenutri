import {Container} from './style'
import img from'../../images/ebook.png'
import { Button } from '../../Componentes/Button'
import resume from '../../images/NUTRICIONAIS.pdf'



export function Ebook(){
   
    return(
        <Container>
            <section className="section" id="ebook">
                <div className="container">
                 <header>
                    <h2 className="title">Ebook</h2>
                </header> 
                    <div className="book">

                    
                            <div className="Links">

                                <p>Comece agora mesmo a cuidar de você, ganhe mais saúde e atinja seus objetivos.</p>
                                <p>Baixe o ebook gratuito, e siga as orientações nutricionais para perda de peso e reeducação alimentar.</p>
                                <a href={resume} download="Orientações">
                                    <Button >Download</Button>

                                </a>
                            </div> 
                            <div className="imageBook" >
                            
                                <img src={img} alt=""/>
                            </div>    
                    </div>          
            </div>
           
      </section> 
      <div className="divider-1"></div>
        </Container>
    )
}   
