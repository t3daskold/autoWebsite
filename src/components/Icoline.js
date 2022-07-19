import ico1 from "../assets/icoline/ico1.png";
import ico2 from "../assets/icoline/ico2.png";
import ico3 from "../assets/icoline/ico3.png";
import ico4 from "../assets/icoline/ico4.png";

export default function Icoline() {
  return (
    <div className="iconline">
      <div className="ico1">
        <img src={ico1} alt=""></img>
        <h4>Комплексная диагностика двигателя и техническое обслуживание.</h4>
      </div>
      <div className="ico2">
        <img src={ico2} alt=""></img>
        <h4>Ремонт ходовой части, рулевого управления и трансмиссии.</h4>
        <div className="ico4">
          <img src={ico4} alt=""></img>
          <h4>Услуги по-текущему ремонту двигателя.</h4>
        </div>
      </div>
      <div className="ico3">
        <img src={ico3} alt=""></img>
        <h4>Экспресс-замена масла и технических жидкостей.</h4>
      </div>
    </div>
  );
}
