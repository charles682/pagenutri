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
          
            <p>Cristiane Umbelina - Nutricionista Clínica Esportiva</p>
           
            <h2>
              Minha paixão é ajudar as pessoas a emagrecerem e ganhar massa magra de forma saudável, sem radicalismo e sem sofrimento.
            </h2>
            <p>
              Sou bacharela em Nutrição, formada a 5 anos pelo Centro Universitário Una, em Belo Horizonte-MG. Me especializei em Nutrição Clínica E Esportiva. Meu principal foco é ajudar as pessoas a terem uma melhor qualidade de vida através da prevenção de doenças, e cuidados no processo de emagrecimento, hipertrofia muscular, e também no controle e tratamento de doenças já existentes. Assim, com base em um protocolo nutricional correto, todos possam alcançar seus objetivos estéticos e de saúde, e assim ter a autoestima que desejar e poder usufruir da vida com mais saúde e qualidade de vida.
            </p>
            <br />
            <p>
              Acredito que uma boa dieta deve se adequar a rotina do paciente, com alimentação simples e acessível, pois dessa forma o plano alimentar se torna mais fácil de ser szeguido e contribui para alcançar os objetivos desejados; uma vez que nossos hábitos alimentares refletem em toda a nossa saúde como um todo. 
            </p>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </Container>

    );
}
