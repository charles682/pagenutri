import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
/*====  RESET ============================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  

  html {
  scroll-behavior: smooth;
}


  body {
    font: 700 1rem 'DM Sans', sans-serif;
    color: ${({theme}) => theme.COLORS.textColor};
    background:${({theme}) => theme.COLORS.bodyColor} ;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  
  .title {
    font: 700  2rem 'Poppins', sans-serif ;
    color: ${({theme}) => theme.COLORS.titleColor};
    -webkit-font-smoothing: auto;
    
  } 
 
  
.section {
    padding: calc(5rem + 4.5rem) 0;
   
  }
  
  .grid {
    display: grid;
    gap: 2rem;
  }
  
  img {
    width: 100%;
    height: auto;
  }

  .divider-1 {
  height: 2px;
  background: linear-gradient(
    270deg,
    #cdf4e6,
    #6ab99d
  );
}

.divider-2 {
  height: 2px;
  background: linear-gradient(
    270deg,
    #6ab99d,
    #cdf4e6
  );
}
 
 @media (max-width:720px){
  .section {
    padding: 3.5rem 0;
   
  }
  
 
 }
 

`;