import styled from"styled-components"
export const Container = styled.div`
.container{
  width:83%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#ebook .book {
  width: 100%;
  height: 60vh;
   display: flex;
  align-items: center;
  justify-content: center;
}

#ebook p{
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
  height: 100%;
  display: flex;
  flex-direction: column;

 }
 
 header .title{
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

 
}
.container .book{
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 80%;
  height: 70%;
  text-align: justify;
  
}


   } 

`
