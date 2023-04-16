import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  z-index: 3;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  text-align: center;
`

export const ModalContainer = styled.div`
  position: relative;
  opacity: 1;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  width: max-content;
  padding: 50px 40px;
  background: white;
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #555;
    outline: none;
    transition: border-color 0.3s;
    :focus {
      border-color: black ;
    }
    :last-of-type {
      margin-top: 10px;
    }
  }
  button {
    width: 100%;
    max-width: 229px;
    padding: 10px 20px;
    border: 2px solid #000;
    background-color: #fff;
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s ease;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`

export const Close = styled.div`
    font-size: 50px;
    position: absolute;
    right: 13px;
    top: -5px;
    cursor: pointer;
    height: fit-content;
    font-weight: 400;
    color: #000;
`

