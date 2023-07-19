import styled from"styled-components"
export const Container = styled.div`
.section{
  display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
}
 #contact .grid {
  gap: 4rem;
}

span {
  background-color: red;
}
Button{
  gap: 1rem;
    display: flex;
}
.container {
    width:83%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
  }

  #contact .text {
    max-width: 30rem;
  }

#contact .text p {
  margin-bottom: 2rem;
}

#contact ul.grid {
  gap: 1rem;
}

#contact ul li {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.direitos{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({theme}) => theme.COLORS.baseColor}; 
  height: 10rem;
}

.Programador{
 
    text-align: center;    

    color:${({theme}) => theme.COLORS.textColorLight};
  
}
.a{
    display: flex;
    gap: 1rem;
   }
@media(max-width:720px){
  .section{

   display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
}
  .container{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
  
   }
   

  li{
    
    width: 300px;
   }
   Button{
    width: 19rem;

   }
   
   .direitos{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
   }

   
}


`
