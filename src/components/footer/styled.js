import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0 2rem;
  color: var(--textColor);
  background-color: var(--mainColor);
  align-items: center;
  
  a {
    text-decoration: none;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  
  a {
    color:white;
  }
  a:hover{
    color: #585454FF;
  }
`