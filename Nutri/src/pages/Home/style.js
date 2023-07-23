import styled from"styled-components"
export const Container = styled.div`


/*====  HOME ============================ */
.section{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

.container {
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: center;
}

 .image {
  width: 35%;
  margin: auto;
  position: relative;
}

 .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background: ${({theme}) => theme.COLORS.baseColorSecond};
  position: absolute;
  top: -10.8%;
  left: 16.7%;
  z-index: 0;
}

 .image img {
  position: relative;
  right: 2.93rem;
}

 .image img,
 .image::before {
  border-radius: 0.25rem;
}

 .text {
  width: 30%;
  margin-left: 1rem;
  margin-right: 1rem;
  
}

.text h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
}
 .text p {
  margin-bottom: 2rem;
  text-align: justify;
}


@media(max-width:720px){
  .container{
    
    display: flex;
    flex-direction: column-reverse;
   
 
    .image {
      min-width: 80%;

    
    }

    .text{
      min-width: 100%;
     
    }

   Button{
    width: 19rem;
   }
   
   } 
  
   
}
@media(min-width: 721px) and ( max-width: 1112px){
  .container{
    display: flex;
    
   
 
    .image {
      min-width: 48%;
      margin: 0 42px;
    
    }

    .text{
      min-width: 40%;
     
    }

    .text h1{
      font-size: 1.5rem;
    }

   Button{
    width: 19rem;
   }
   
   } 
  
   
}

`