import styled from"styled-components"
export const Container = styled.div`


/*====  HOME ============================ */
#home{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

#home .container {
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#home .image {
  width: 35%;
  margin: auto;
  position: relative;
}

#home .image::before {
  content: '';
  height: 100%;
  width: 100%;
  background: ${({theme}) => theme.COLORS.baseColorSecond};
  position: absolute;
  top: -10.8%;
  left: 16.7%;
  z-index: 0;
}

#home .image img {
  position: relative;
  right: 2.93rem;
}

#home .image img,
#home .image::before {
  border-radius: 0.25rem;
}

#home .text {
  width: 30%;
  margin-left: 1rem;
  margin-right: 1rem;
  
}

#home .text h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
}

#home .text p {
  margin-bottom: 2rem;
  text-align: justify;
}

.divider-1 {
  height: 1px;
  background: linear-gradient(
    270deg,
    #6ab99d,
    #cdf4e6
    
  );
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

`