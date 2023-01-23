import styled from 'styled-components'

export const Image = styled.img`
  width: 130px;
  height: 130px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  
  
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(2,1fr);
  }
  
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

export const CenteredDiv = styled.div`
  @media screen and (min-width: 450px) {
    grid-column: 2;
  }
`

export const Text = styled.div`
  font-family: "Roboto", serif;
  padding: 8px 0;
  font-weight: 500;
`