import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 40px;
  @media screen and (max-width: 600px) {
    margin: 0 15px;
    padding: 30px 0;
    width: fit-content;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 65px;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1080px;
  padding-top: 10px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const ImageContainer = styled.div`
  width: 45%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-family: Roboto,serif;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 0;
`

export const Description = styled.div`
  font-family: Roboto,serif;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0 12px 0;
`