import Map from "./Map.jsx";
import {useJsApiLoader} from "@react-google-maps/api";

export default function Main() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const {isLoaded} = useJsApiLoader({
    id: "auto-kozacka-126",
    googleMapsApiKey: API_KEY,
  });
  return (
    <div className="contacts" id={"contacts"}>
      <div className="contacts-header">
        <h1> Контакти </h1>
      </div>
      <div className="contact-phones">
        <div>
          <h2>
            <a href="tel:+380635551234">+380989642523</a>
          </h2>
          <h2>
            <a href="tel:+380512312309">+380634414609</a>
          </h2>
          <div className="info">
            Зателефонуйте нам і ми вас обов'язково проконсультуємо, або залиште
            заявку на зворотній дзвінок і наш менеджер вам зателефонує.
          </div>
          <div>
            <ul>Ми знаходимося за адресою</ul>
            <li> вул. Козацька 126</li>
          </div>
        </div>
        {isLoaded ? <Map /> : "Loading..."}
      </div>
    </div>
  );
}
