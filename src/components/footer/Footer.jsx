import logo from "../../assets/logo.png";
import {Column, Container} from "./styled";

export default function Footer() {
  return (
    <Container>
        <div>
          <img src={logo} alt="" width={100}></img>
        </div>
        <Column>
          <a href="tel:+380989642523">+380989642523</a>
          <a href="tel:+380634414609">+380634414609</a>
        </Column>
    </Container>
  );
}
