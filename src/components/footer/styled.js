import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 260px;
  padding: 0 180px;
  color: var(--textColor);
  background-color: var(--mainColor);
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 330px;
    padding: 20px 0;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
  a {
        display: flex;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: white;
        padding-right: 16px;
        width: fit-content;
        :hover {
            color: #3E3E3E;
        }
        img {
            margin-right: 10px;
        }
        
    }
    @media screen and (max-width: 1024px) {
      align-items: center;
    }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    row-gap: 10px;
  }
`
export const PagesRow = styled.div`
  display: flex;
  column-gap: 40px;
  a {
    text-decoration: none;
    :hover {
      div {
        color:gray;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    padding: 0;
  }
`

export const LogoRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: -20px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`