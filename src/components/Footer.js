import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="telephone">
        <div>
          <img src={logo} alt="" width={100}></img>
        </div>
        <div className="column">
          <a href="tel:+380989642523">+380989642523</a>
          <a href="tel:+380634414609">+380634414609</a>
        </div>
      </div>
    </footer>
  );
}
