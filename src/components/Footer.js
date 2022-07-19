import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="telephone">
        <div>
          <img src={logo} alt="" width={100}></img>
        </div>
        <div className="column">
          <a href="tel:+380635551234">+380635551234</a>
          <a href="tel:+380632321234">+380632321234</a>
        </div>
      </div>
    </footer>
  );
}
