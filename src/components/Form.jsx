import {ToastContainer, toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import '../App.scss'
export default function Form() {
  const [phone,setPhone] = useState('');
  const [carMark, setCarMark] = useState('');
  const [jobType, setJobType] = useState('');
  const [price, setPrice] = useState(null)
  function onSubmit(data) {
    toast.dark(
      "Вашу заявку відправлено!\nЧекайте на дзвінок від нашого менеджера.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    fetch(
      `https://api.telegram.org/bot5539510239:AAGNPapFMWa3kbGnccTw-zMg5AthS2jqy98/sendMessage?chat_id=783715841&text=${[
        `Новая Заявка! \n Имя:${data.name},\n Номер:${phone}`,
      ]}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((info) => info)
      .catch((e) => console.log(e));

    reset();
  }

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    const randomPrice =  Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;;
      setPrice(randomPrice)
  }, [carMark,jobType]);
  return (
      <form
          method="POST"
          action={`https://api.telegram.org/bot${process.env.REACT_BOT_API_KEY}/sendMessage?chat_id=${process.env.REACT_CHAT_ID_KEY}&text=asd`}
          onSubmit={handleSubmit(onSubmit)}
      >
          <h2 style={{fontSize: "19px", paddingBottom: "10px"}}>
              {" "}
              Попередньо перевірити вартість послуги
          </h2>
          <select className='select-wrapper'
                  value={carMark}
                  onChange={(e) => {
                      if (e.target.value !== carMark) {
                          setCarMark(e.target.value);
                      }
                  }}>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>AUDI</option>
          </select>
          <select
              className="select-wrapper"
              value={jobType}
              onChange={(e) => {
                  if (e.target.value !== jobType) {
                      setJobType(e.target.value);
                  }
              }}>
              <option>Послуги з ремонту двигуна</option>
              <option>
                  Ремонт ходової частини, рульового керування та трансмісії.
              </option>
              <option>
                  Комплексна діагностика двигуна та технічне обслуговування.
              </option>
              <option>Рихтування автомобілів</option>
              <option>Локальне фарбування</option>
          </select>

          {price && <div className="price-row">
              <div>Оціночна вартість:</div>
              <div>{price}грн</div>
          </div>}
          <h2 style={{fontSize: "19px", paddingBottom: "10px", marginTop: "24px"}}>
              {" "}
              Залишіть заявку нашому менеджеру і ми Вам передзвонимо
          </h2>
          <div style={{width: "230px"}}>
              <input
                  {...register("name", {
                      required: true,
                      maxLength: {
                          value: 20,
                          message: "Максимальна кількість символів 20",
                      },
                      minLength: {
                          value: 1,
                          message: "Будь ласка, введіть свое ім'я",
                      },
                  })}
                  pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{1,20}"
                  placeholder="Ім'я"
              />

              <div style={{color: "red"}}>
                  <p>{errors?.name?.message}</p>
              </div>
              <InputMask mask={"+380(99)-999-99-99"} placeholder={'+380(00)-000-00-00'} value={phone}
                         onChange={e => setPhone(e.target.value)}/>
          </div>

          <button type="submit"> Відправити заявку</button>
          <ToastContainer style={{color: "black"}}/>
      </form>
  );
}
