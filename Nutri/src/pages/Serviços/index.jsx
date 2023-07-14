import {Container} from './style'

export function Servico(){
    return(
            <Container>
            <section className="section" id="services">
                 <div className="container grid" >
                <header>
                   <h2 className="title">Serviços</h2>
                    <p className="subtitle">
                    Trabalho com vários programas nutricionais, oferecendo o mais completo
                     suporte nutricional e acompanhamento para o seu objetivo. 
                    </p>
                </header>
                <div className="cards grid">

                    <div className="card">
                    <h3 className="title">Consulta presencial</h3>
                    <p>
                        Consulta de aproximadamente uma hora e meia para conhecer em mais detalhes a rotina, os hábitos alimentares e preparar o plano alimentar personalizado do paciente.
                    </p>
                    </div>

                    <div className="card">
                    <h3 className="title">Consulta online</h3>
                    <p>
                        Para quem prefere ou não pode estar presencialmente para a consulta, podemos realizar o atendimento de forma virtual através de chamada de vídeo, onde iremos conversar melhor para a elaboração do cardápio mais adequado ao seu estilo de vida e conquista dos seus objetivos.
                    </p>
                    </div>
                    <div className="card">
                    <h3 className="title">Análise bioimpedância</h3>
                    <p>
                        A bioimpedância é um exame destinado à avaliação da composição corporal, estimando a massa magra, gordura corporal, idade corporal, taxa metabólica basal, entre outros.
                    </p>
                    </div>

                    <div className="card">
                    <h3 className="title">Dieta personalizada</h3>
                    <p>
                        Construção de plano alimentar personalizado de acordo com as preferências alimentares e rotina do paciente.
                    </p>
                    </div>

                    <div className="card">
                    <h3 className="title">Receitas e dicas</h3>
                    <p>
                        Diversas receitas e dicas para te ajudar na preparação dos alimentos e pratos do dia a dia, com ingredientes que estamos acostumados e todos acessíveis.
                    </p>
                    </div>
                    <div className="card">
                    <h3 className="title">Avaliação adipômetro</h3>
                    <p>
                        O adipômetro é um dos aparelhos mais importantes para medirmos a dobra cutânea e calcular o percentual de gordura corporal, fundamental para o acompanhamento adequado focado em perda de gordura e ganho de massa muscular.
                    </p>
                    </div>
                    </div>
                </div>
            </section>
            <div className="divider-1"></div>
            </Container>

    );
}
