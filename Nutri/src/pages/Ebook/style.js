import styled from"styled-components"
export const Container = styled.div`
.section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
}
.container{
  width:83%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
      
}
header .title{
  
  display: flex;
  align-items: center;
  justify-content: center;

 
}

.book {
  width: 100%;
  height: 60vh;
   display: flex;
  align-items: center;
  justify-content: center;
}

 p{
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.book .imageBook {
  width: 30%;
}

.book .imageBook img{
  width: 100%;
  
}

.book .Links{
  width: 30%;  
  margin-left: 20%;
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
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

 }
 
 header .title{
  margin-bottom: 3rem;
  margin-left: -9.5rem;
  justify-content: flex-start;
  display: flex;
  align-items: center;


 
}
.container .book{
  width:100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction:column-reverse;
 
}

.book .imageBook{
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}


.book .Links{
  width: 100%;  
  margin-left: 0;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: justify;
}

Button {
  width: 19rem;
}
   } 

   

`
