import {Column, Container, Description, Flex, Grid, Image, ImageContainer, Title} from "./styled";
import mock from '../../data.js'
const Gallery = () => {
    return (
        <Container>
            <Grid>
                {mock.map((e,index)=> {
                    return  <Column key={index}>

                        <Title>{e.title}</Title>
                        <Description>{e.description}</Description>
                                <Flex>
                                    <ImageContainer>
                                        <Description>До</Description>
                                    <Image src={e.imageBefore} alt={'asd'}/>
                                </ImageContainer>
                                    { e.imageAfter ?
                                        <ImageContainer>
                                            <Description>После</Description>
                                            <Image src={e.imageAfter} alt={'asd'}/>
                                        </ImageContainer> : <ImageContainer></ImageContainer>}
                                </Flex>
                            </Column>
                })}
            </Grid>
        </Container>
    )
}

export default Gallery