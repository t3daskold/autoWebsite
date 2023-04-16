import Slider from "./Slider.jsx";
import {Container,Wrapper,Grid,GridItem} from './main/styled'


import Text from '../components/text/Text'

import bodyRepair from "../assets/icoline/bodyRepair.svg"
import oilChange from "../assets/icoline/oilChange.svg"
import carPainting from "../assets/icoline/carPainting.svg"
import transmission from "../assets/icoline/transmission.svg"
import {useState} from "react";
import Modal from "./form/Form";
export default function Main() {
  const typeOfRepair = [
    {
      img:bodyRepair,
      text:"рихтування авто, рихтування без фарбування, заміна деталей без зварювання"
    },
    {
      img:carPainting,
      text:"фарбування, локальне фарбування,ремонт та фарбування бамперів"
    },
    {
      img: oilChange,
      text:"заміна тех.рідин",
    },
    {
      img: transmission,
      text:"ремонт ходової, ремонт трансмісії, ремонт рульового управління"
    }]

  return (
    <Wrapper>
        <Container 
          margin={'10px 0 10px 0'}
          width={'1140px'}>
          <Text
          padding={'0 0 20px 0'}
          fontWeight={500} 
          fontSize={'36px'}
          string={'Козацький сервіс'} textColor={'black'}/>
          <Text
          padding={'0 0 20px 0'}
          fontSize={'22px'}
          string={"Наш сервіс з ремонту автомобілів пропонує" 
          + "широкий спектр послуг, пов'язаних із обслуговуванням та ремонтом автомобілів."}
          textColor={'black'}
          />
          <Text 
            fontSize={'23px'}
            textColor={'black'}
            string={""}/>
          <Text 
            fontSize={'22px'}
            string={"Ми надаємо такі види робіт:"}            
            textColor={'black'}
           />
           <Grid>
          {
            typeOfRepair.map((el,i) => <GridItem>
              <img src={el.img} height={156} alt={i + 'icon'}/>
              <Text 
              key={i} 
              string={el.text} 
              fontSize={'17px'}
              textColor={'black'}/>
              </GridItem>)
          }    
          </Grid>
        </Container>
        <Slider />
    </Wrapper>
  );
}
