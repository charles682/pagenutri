import styled from"styled-components"
export const Container = styled.div`
.section{
  height: 100vh;
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

#contact .container {
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
    text-align: center;
    margin-bottom: 2rem;
}
@media(max-width:720px){
  .container{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
  
   }

  
   li{
    width: 300px;
   }
}


`
