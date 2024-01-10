import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import logo from "../assets/logo.png";
import white_phone from "../assets/white_phone.png";
import {Link, NavLink} from "react-router-dom";
export default function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };


  return (
    <header>
      <div className="icon">
        <Link to={'/'}>
          <img src={logo} alt="logo" width={100}></img>
        </Link>

        <div className="phoneNumber">
          <div>
            <img src={white_phone} alt={"logo"} width={15}></img>
          </div>
          <div className="phoneNumber_column">
            <a href="tel:+380989642523">+380989642523</a>
            <a href="tel:+380634414609">+380634414609</a>
          </div>
        </div>

      </div>
      <div className="nav_a">
        <nav ref={navRef}>
          <NavLink to="/#contacts">Контакти</NavLink>
          <Link to={'/workers'}>Майстри</Link>
          <Link to={'/aboutUs'}>Про нас</Link>
          <Link to={'/gallery'}>
            Приклади наших робіт
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
