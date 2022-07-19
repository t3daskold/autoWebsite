import Slider from "./Slider.js";
import Form from "./Form";
import Contacts from "./Contacts";
import Icoline from "./Icoline.js";

export default function Main() {
  return (
    <div className="head_wrapper">
      <div className="wrapper">
        <Form />
        <div className="about_us" id="about_us">
          <h2> Про нас </h2>
          Наш автосервіс надає такі види робіт: рихтування автомобілів,
          фарбування, локальне фарбування, рихтування без фарбування, заміна
          тех.рідин, ремонт ходової, ремонт рульового управління, ремонт
          трансмісії, заміна деталей без зварювання, ремонт та фарбування
          бамперів.
        </div>
        <Slider />
        <h2>Ми з радістю надамо Вам повний спектр послуг:</h2>
        <Icoline />
      </div>
      <Contacts />
    </div>
  );
}
