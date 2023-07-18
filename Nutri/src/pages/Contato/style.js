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


.Programador{
  display: flex;
  align-items: center;
  justify-content: center;
    height: 10rem;
    text-align: center;    
    margin-bottom: 2rem;
    color:${({theme}) => theme.COLORS.textColorLight};
    background-color: ${({theme}) => theme.COLORS.baseColor};
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
}


`
