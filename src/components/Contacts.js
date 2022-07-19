import Map from "./Map.js";
import {useJsApiLoader} from "@react-google-maps/api";

export default function Main() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const {isLoaded} = useJsApiLoader({
    id: "auto-kozacka-126",
    googleMapsApiKey: API_KEY,
  });
  return (
    <div className="contacts" id="contacts">
      <div className="contacts-header">
        <h1> Контакты </h1>
      </div>
      <div className="contact-phones">
        <div>
          <h2>
            <a href="tel:+380635551234">+380635551234</a>
          </h2>
          <h2>
            <a href="tel:+380512312309">+380635551234</a>
          </h2>
          <div className="info">
            Позвоните нам и мы вас обязательно проконсультируем, или оставьте
            заявку на обратный звонок и наш менеджер вам перезвонит.
          </div>
          <div>
            <ul> Мы находимся за адресом</ul>
            <li> ул. Казацкая 126 </li>
          </div>
        </div>
        {isLoaded ? <Map /> : "Loading..."}
      </div>
    </div>
  );
}
