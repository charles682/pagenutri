import styled from"styled-components"
export const Container = styled.div`


.header {
    position: fixed;
    height: 90px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: .3s ease-in;
    overflow: hidden;
    background-color: ${({theme}) => theme.COLORS.backgroundColor};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}

.header .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    margin: auto;
    height: 100%;
    padding: 0 1rem;
}

.header .nav-menu a {
 
    font: 700  rem 'Poppins', sans-serif ;
    color: ${({theme}) => theme.COLORS.titleColor};
    -webkit-font-smoothing: auto;
    
 
}

.header .navbar img {
    width: 150px;
    height: auto;
}

.header .nav-menu {
    display: flex;
    cursor: pointer;
}

.header .nav-item {
    padding: 1rem;
    font-weight: 500;
}
.nav-item  .active {
    border-bottom: 3px solid #6ab99d;
}

.header .nav-item a:hover {
    padding-bottom: 12px;
    border-bottom: 3px solid #6ab99d;
}

.hamburger {
    display: none;
}

 .iconMenu i {
  font-size: 1.5rem;
  color: #81B99D;
}

.iconMenu {
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  gap: 1rem;
  margin-left: 1rem;


}

@media screen and (max-width:720px) {
    .header {
        max-width: 100%;
       
    }

    .header .navbar {
        max-width: 100%;
    }

    .hamburger {
        display: block;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 90px;
        flex-direction: column;
        background-color: ${({theme}) => theme.COLORS.backgroundColor};
        width: 100%;
        height: 90vh;
        z-index: 999;
        text-align: center;
        transition: .3s;
    }

    .nav-menu.active {
        left: 0;
       
    }

    .nav-item {
        margin: 1.5rem 0;
    }

    .header .navbar img {
        width: 150px;
    }
}

`