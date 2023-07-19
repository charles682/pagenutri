import {Container} from './style'
import img from "../../images/WhatsApp_Image_2022-08-04_at_16.50.52-removebg-preview.png"


export function Sobre(){
 
  

    return(
    <Container>
      <section className="section" id="about">
        <div className="container grid">
          <div className="image">
            <img
              src={img}
              alt="Cristiane Umbelina"
            />
          </div>
          <div className="text">
            <h2 className="title">Sobre</h2>
          
            <p>Cristiane Umbelina - Nutricionista Esportiva</p>
           
            <h2>
              Minha paixão é ajudar as pessoas a emagrecerem e ganhar massa magra de forma saudável, sem radicalismo e sem sofrimento.
            </h2>
            <p>
              Sou nutricionista há 4 anos e me especializei em Nutrição Clínica E Esportiva. Meu principal foco é ajudar as pessoas no processo de emagrecimento, hipertrofia muscular, e melhor qualidade de vida para que conquistem seus objetivos estéticos e de saúde, e assim tenham a autoestima que desejarem e possam usufruir da vida com mais saúde e qualidade de vida.
            </p>
            <br />
            <p>
              Acredito que a dieta deve se adequar a rotina do paciente, com alimentação simples e acessível, pois dessa forma o plano alimentar se torna mais fácil e contribui para alcançar os objetivos desejados.
            </p>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </Container>

    );
}
