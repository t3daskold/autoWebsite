import logo from "../../assets/logo.png";
import {Column, Container, Row, PagesRow,LogoRow} from "./styled";
import Text from "../text/Text";
import { Link,NavLink } from "react-router-dom"
import phone from "../../assets/white_phone.png";

export default function Footer() {
  return (
    <Container>
        <Column>
        <Row>
            <Text 
              fontWeight={700}
              string={'Козацький сервіс'}
              textColor={'white'}
            />
          <PagesRow>
            <Link to='/'>
              <Text string={'Головна'} textColor={'white'}/>
            </Link>
            <Link to='/gallery'>
              <Text string={'Приклади наших робіт'} textColor={'white'}/>
            </Link>
            <Link to='/#about_us'>
              <Text string={'Про нас'} textColor={'white'}/>
            </Link>
            <Link to="/#contacts">
              <Text string={'Контакти'} textColor={'white'}/>
            </Link>
          </PagesRow>
        </Row>
       
        <LogoRow>
            <Text string={'м.Київ вул.Козацька 126'} textColor={'white'}/>
            <img src={logo} alt="logo" width={100} height={100}></img>
        </LogoRow>
          <Text string={'Графік роботи: 09:00 - 19:00'} textColor={'white'}/>
          <Text string={"З понеділка по п'ятницю"} textColor={'white'}/>
          <a href="tel:+380989642523">
                <img src={phone} alt={"phone"} width={15} height={15}></img>
                    +380989642523
                </a>
                <a href="tel:+380989642523">
                <img src={phone} alt={"phone"} width={15} height={15}></img>
                +380989642523
                </a>
        </Column>
    </Container>
  );
}
