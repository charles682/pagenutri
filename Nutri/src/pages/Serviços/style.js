import styled from"styled-components"
export const Container = styled.div`


/*====  SERVICES ============================ */
.section{
    display: flex;
    align-items: center;
    justify-content: center;
}

header{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.container{
    width: 83%;  
    display: flex;
    flex-direction: column;
}
.cards {
    width: 82%;
    grid-template-columns: 1fr 1fr 1fr;
   
  }

.card {
 width: 320px;
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid ${({theme}) => theme.COLORS.baseColor};
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;

}

.card i {
  display: block;
  margin-bottom: 1.5rem;
  font-size: 5rem;
  color: ${({theme}) => theme.COLORS.baseColor};
}

.card .title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
 text-align: left;
}


.card p{
  text-align:left;
}


div.item {

  width: 100%;

}

.divider-1 {
  height: 2px;
  background: linear-gradient(
    270deg,
    #cdf4e6,
    #6ab99d
  );
}

@media(max-width:812px){
 
  
 .container{
 display: flex;
 align-items: center;
    justify-content: center;
 flex-direction: column;

   .card{
    width: 270px;
   }
   
    .cards{
      display: flex;
      flex-direction: column;
    }
   
   
   } 
}
`