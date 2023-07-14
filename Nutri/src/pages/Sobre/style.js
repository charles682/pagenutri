import styled from"styled-components"
export const Container = styled.div`


#about .container {
  margin: 0;
  width: 83%;
  display: flex;
  align-items: center;
  justify-content:center;
 
}

#about  h2{
  margin-top: 1rem;
 
}

#about .image {
    width: 40%;
    position: relative;
}

 #about .image img {
 width:100% ;
 margin: auto;
} 

#about .text {
  width: 60%;

}

#about .text p {
  margin-bottom: 2rem;
  text-align: justify;
  color: ${({theme}) => theme.COLORS.textColor};
}


.divider-1 {
  height: 1px;
  background: linear-gradient(
    270deg,
    #6ab99d,
    #cdf4e6
    
  )};
@media(max-width:720px){
  .container{
    display: flex;
    flex-direction: column;
    min-width: 100%;
 
    padding: 1rem;
    .image {
      min-width: 80%;
     
    
    }

    .text{
      min-width: 100%;
      padding: 1rem;
    }
   
  }
}
`