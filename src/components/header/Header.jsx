import { Container,Row, Contacts, StyledBurger, StyledMenu} from "./styled"
import { Link,NavLink } from "react-router-dom"
import logo from "../../assets/logo.png";
import phone from "../../assets/white_phone.png";
import { useState } from "react";
const Header = ({setActive}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(false)
    }
    return (
        <>
          <Contacts>
                <a href="tel:+380989642523">
                <img src={phone} alt={"phone"} width={15} height={15}></img>
                    +380989642523
                </a>
                <a href="tel:+380989642523">
                <img src={phone} alt={"phone"} width={15} height={15}></img>
                +380989642523
                </a>
          </Contacts>

         <Container>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" width={100} height={100}></img>
                    </Link>
                    <StyledBurger open={open} onClick={() => setOpen(!open)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </StyledBurger>
                    <Row>
                        <Link to={'gallery'}>
                            Приклади наших робіт
                        </Link>
                        <NavLink to="/#about_us">Про нас</NavLink>
                        <NavLink to="/#contacts">Контакти</NavLink>
                        <button onClick={setActive}>Замовити дзвінок</button>
                    </Row>
         </Container>
         {open && <StyledMenu open={open} onClick={handleClick}> 
                        <Link to={'gallery'}>
                            Приклади наших робіт
                        </Link>
                        <NavLink to="/#about_us">Про нас</NavLink>
                        <NavLink to="/#contacts">Контакти</NavLink> 
            </StyledMenu>}
       </>
    )
}

export default Header