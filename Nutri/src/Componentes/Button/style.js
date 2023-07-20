
import styled from "styled-components"

export const Container = styled.button`
   background-color: ${({theme}) => theme.COLORS.baseColor}; 
   color: ${({theme})=> theme.COLORS.textColorLight}; 
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 25rem;
  font: 500 1rem 'DM Sans', sans-serif;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
 `

 