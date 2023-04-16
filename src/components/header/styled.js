import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: black;
    height: 100px;
    padding: 0 130px;
    img {
        position: absolute;
        top: 50px;
        @media screen and (max-width: 1024px) {
            position: relative;
            top: 0;
            width: 90px;
        }
    }
    @media screen and (max-width: 1024px) {
            padding: 0 10px;
            justify-content: space-between;
        }
   
`

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    padding: 0 40px;
    justify-content: end;
    height: 50px;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #252525;
    a {
        display: flex;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: white;
        padding: 0 16px;
        :hover {
            background: #3E3E3E;
        }
        img {
            margin-right: 10px;
        }
        @media screen and (max-width: 1024px) {
          flex-wrap: wrap;
        }
        @media screen and (max-width: 360px) {
          height: fit-content;
        }
        
        
    }
    @media screen and (max-width: 1024px) {
      justify-content: center;
      padding: 0;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 360px) {
      height: 100px;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    column-gap: 40px;
    height: 100%;
    padding: 0 180px;
    margin: 0 auto;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        height: 100%;

        :hover {
            color: #999999;
        }
    }
    button {
      height: 50%;
      padding: 0 20px;
      color: white;
      background: transparent;
      border: 1px solid red;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
      :hover { 
        background: red;
      }
    }
    @media screen and (max-width: 1024px){
        display: none;
    }
`

export const StyledBurger = styled.button`
 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateY(-100%)'};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }

  a {
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s linear;
    color:white;
    @media (max-width: 1024px) {
      text-align: center;
    }

    &:hover {
      color: gray;
    }
  }
`;