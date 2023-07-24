import {Container} from './style';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation} from 'swiper/modules';


import img from'../../images/10.jpeg'
import img1 from'../../images/26.jpeg'
import img2 from'../../images/56.jpeg'
import img3 from'../../images/56.jpeg'
import img4 from'../../images/56.jpeg'


export function Depoimentos(){

  const [slidePerView, setSlidePerView] = useState(2)

  useEffect(() => {
      function handleResize(){
        if(window.innerWidth < 720){
          setSlidePerView(1);
        }else if (window.innerWidth < 1112){
          setSlidePerView(2);
        }
        else{
          setSlidePerView(3);
        }
      }
      handleResize();
      window.addEventListener("resize", handleResize)
      return() =>{
        window.removeEventListener("resize", handleResize)
      }
  }, [])
    return(
            <Container  >
              <section className='section' id="testimonials">   

              <div className="container">
              <header>
                    <h2 className="title">Depoimentos de quem já passou por aqui</h2>
                </header>
              </div>
                
                <Swiper
                    slidesPerView={slidePerView}
                    spaceBetween={30}
                    loop={true}
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ '--swiper-navigation-size': '20px', }}
                >
        
                  <SwiperSlide className='Swiper'>
                  <blockquote>
                                <p>
                                <span>&ldquo;</span>
                                A Dra Cristiane é simplesmente muito fofa!!!
                                Uma profissional que entende o paciente e faz o possível para ajustar a alimentação, orientação ao alcance! Com ela consegui chegar ao meu objetivo com sucesso! Só tenho que agradece-lá.
                                Obrigada pelo carinho!!!
                                </p>
                                <cite>
                                <img
                                    src={img}
                                    alt="Foto de Wanessa Souza"
                                />
                                Wanessa Souza
                                </cite>
                       </blockquote>
                      </SwiperSlide>
                      <SwiperSlide>
                      <blockquote>
                                <p>
                                <span>&ldquo;</span>
                                A Dra Cristiane é simplesmente muito fofa!!!
                                Uma profissional que entende o paciente e faz o possível para ajustar a alimentação, orientação ao alcance! Com ela consegui chegar ao meu objetivo com sucesso! Só tenho que agradece-lá.
                                Obrigada pelo carinho!!!
                                </p>
                                <cite>
                                <img
                                    src={img1}
                                    alt="Foto de Wanessa Souza"
                                />
                                Wanessa Souza
                                </cite>
                       </blockquote>

                      </SwiperSlide>
                      <SwiperSlide> 
                      <blockquote>
                                <p>
                                <span>&ldquo;</span>
                                A Dra Cristiane é simplesmente muito fofa!!!
                                Uma profissional que entende o paciente e faz o possível para ajustar a alimentação, orientação ao alcance! Com ela consegui chegar ao meu objetivo com sucesso!que agradece-lá.
                                Obrigada pelo carinho!!!
                                </p>
                                <cite>
                                <img
                                    src={img2}
                                    alt="Foto de Wanessa Souza"
                                />
                                Wanessa Souza
                                              </cite>
                        </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>  
                        <blockquote>
                                  <p>
                                    <span>&ldquo;</span>
                                Amei o atendimento. Crustiane é muito paciente e atenciosa. Tira todas suas dúvidas! É a profissional que entende a sua dor, e que realmente se coloca no nosso lugar. Não tive dificuldades para fazer o planejmaneto. Foi tudo feito dentro das minhas necessidades, sem precisar retirar nada do que gosto.
                              </p>
                              <cite>
                                <img
                                  src={img3}
                                  alt="Foto de Franciele Venega"
                                />
                                Franciele Venega
                              </cite>
                          </blockquote>
                          </SwiperSlide>
                          <SwiperSlide>
                          <blockquote>
                                      <p>
                                        <span>&ldquo;</span>
                                        Profissional atenciosa, simpática, esclarecedora, elaborou cardápio de acordo com minha rotina alimentar, estou satisfeita e me sentido muito bem
                                      </p>
                                      <cite>
                                        <img
                                          src={img4}
                                          alt="Fotos de Valeska Fabris"
                                        />
                                        Valeska Fabris
                                      </cite>
                                    </blockquote>
                          </SwiperSlide>
                         </Swiper>
             </section>  
         
             <div className="divider-2"></div>
            </Container>   
            
    );
}