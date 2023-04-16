import styled from "styled-components";

export const TextContainer = styled.div`
    font-size: ${props => props.fontSize || '15px'};
    color: ${props => props.textColor || 'black'};
    font-weight: ${props => props.fontWeight};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    padding: ${props => props.padding || '0'}
`