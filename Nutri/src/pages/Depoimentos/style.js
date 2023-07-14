import styled from"styled-components"
export const Container = styled.div`

/*====  TESTIMONIALS ============================ */
.section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 
  
}
header .title{
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

 
}
.swiper {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
 
  background-color: ${({theme}) => theme.COLORS.backgroundColor};
}
blockquote {
  height: 400px;
  width: 350px ;
  padding: 2rem; 
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  margin-bottom: 3rem;
  display: grid;
  gap: 1rem;
  background-color: ${({theme}) => theme.COLORS.backgroundColor};
}

blockquote p {
  max-width: 200px;
position: relative;
text-align: justify;
text-indent: 1.275rem;
margin-bottom: 1.5rem;
margin-left: 1.5rem;
color:${({theme}) => theme.COLORS.titleColor} ;
background-color: ${({theme}) => theme.COLORS.backgroundColor};
}

blockquote p span {
  font: 700 2.5rem serif;
  position: absolute;
  top: -0.375rem;
  left: -1.875rem;
  color: ${({theme}) => theme.COLORS.baseColor};
  
}

img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  clip-path: circle();
  margin-right: 0.5rem; 
} 

swiper-slide {
      text-align: center;
      font-size: 18px;
      color:black ;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({theme}) => theme.COLORS.backgroundColor};
    }

.swiper-button-prev,
div.swiper-button-next
{
    width: 1px;
    color: ${({theme}) => theme.COLORS.baseColor};
    
}


.swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    font-size: 12px;
    background: ${({theme}) => theme.COLORS.baseColor};
  }

  .swiper-button,
.swiper-button {
  background: ${({theme}) => theme.COLORS.baseColor};
  
}

.divider-1 {
  height: 1px;
  background: linear-gradient(270deg, #6ab99d, #cdf4e6);
  margin-bottom: 3rem;
  width: 100%; /* ou defina uma largura específica */
}

@media(max-width:720px){
  .container{
    display: flex;
    flex-direction: column;
    min-width: 100%;
  }
  .swiper-button-prev,
div.swiper-button-next
{
  display: none;
}
}
`