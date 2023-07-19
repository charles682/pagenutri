import styled from"styled-components"
export const Container = styled.div`
.section{
  display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
}
.grid {
  gap: 4rem;
}

span {
 color: ${({theme}) => theme.COLORS.baseColor}; 
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

.text {
    max-width: 30rem;
  }

 .text p {
  margin-bottom: 2rem;
}



 ul.grid {
  gap: 1rem;
}

 ul li {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.direitos{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({theme}) => theme.COLORS.baseColor}; 
  height: 10rem;
}


.Programador{
 
    text-align: center;    
    color:${({theme}) => theme.COLORS.textColorLight};
  
}

.Programador a{
  text-decoration: none;
  color: white;
}
.icons{
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
   
   

   
}


`
