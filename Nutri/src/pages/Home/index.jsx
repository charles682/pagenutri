import {Container} from './style'
import img from "../../images/WhatsApp Image 2022-08-04 at 16.50.52.jpeg"
import {Button} from "../../Componentes/Button/index"

export function Home(){
    return(
    <Container>
            <section className="section" id="home">
                <div className="container grid">
                <div className="text">
                    <h1 className="title">Não começe uma dieta que acabará um dia, começe um estilo de vida que durará pra sempre!</h1>
                    <p>
                    Nutricionista, com especialização em Nutrição Clínica E Esportiva, com vários atendimentos realizados presencial e online,vários grupos online de emagrecimento, em vários estados do Brasil, e ótimos resultados alcançados. 
                    </p>
                    <Button >
                      Agende sua Consulta
                    </Button>
                            
                </div>

                <div className="image">
                    <img
                    src={img}
                    alt="Mulher sorrindo penteando outra mulher"
                    />
                </div>
                </div>
            </section>
            <div className="divider-1"></div>
        </Container>

    );
}
