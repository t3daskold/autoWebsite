import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    max-width: ${props => props.width};
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
    row-gap: 15px;
    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    div {
        width: 100%;
        max-width: 350px;
        text-align: center;
    }
`