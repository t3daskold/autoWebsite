import ico1 from "../../assets/icoline/repairAuto.png";
import ico2 from "../../assets/icoline/ico2.png";
import ico3 from "../../assets/icoline/ico3.png";
import ico4 from "../../assets/icoline/ico4.png";
import {Grid, Image, CenteredDiv, Text} from "./styled";

export default function Icoline() {
  return (
    <Grid>
      <div>
        <Image src={ico1} alt=""></Image>
        <Text>Комплексна діагностика двигуна та технічне обслуговування.</Text>
      </div>
      <div >
        <Image src={ico2} alt=""></Image>
        <Text>Ремонт ходової частини, рульового керування та трансмісії.</Text>
      </div >
        <div>
            <Image src={ico4} alt=""></Image>
            <Text>Послуги з ремонту двигуна.</Text>
        </div>
      <CenteredDiv>
        <Image src={ico3} alt=""></Image>
        <Text>Експрес-заміна олії та технічних рідин.</Text>
      </CenteredDiv>
    </Grid>
  );
}
