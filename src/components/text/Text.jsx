import { TextContainer } from "./styled"
const Text = ({fontSize,mobileFontSize,textColor,string, fontWeight,padding}) => {
    return (
        <TextContainer
                padding={padding} 
                fontWeight={fontWeight}
                fontSize={fontSize} 
                mobileFontSize={mobileFontSize} 
                textColor={textColor}>
            {string}
        </TextContainer>
    )
}

export default Text