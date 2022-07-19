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
          <h2> О нас </h2>
          Наш автосервис предоставляет такие виды работ: рихтовка автомобилей,
          покраска , локальная покраска, рихтовка без покраски, замена
          тех.жидкостей, ремонт ходовой, ремонт рулевого управления, ремонт
          трансмиссии, замена деталей без сварки, ремонт и покраска бамперов.
        </div>
        <Slider />
        <h2>Мы с радостью предоставим Вам полный спектр услуг:</h2>
        <Icoline />
      </div>
      <Contacts />
    </div>
  );
}
