import {ToastContainer, toast} from "react-toastify";
import React, {useContext, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import Text from "../text/Text";
import {Close, ModalContainer, Wrapper, } from "./styled";
import ReactDOM from 'react-dom';

export default function Modal({active,setActive}) {
  const [phone,setPhone] = useState('');
  const onSubmit =  (data) => {
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
      `https://api.telegram.org/bot5539510239:AAGNPapFMWa3kbGnccTw-zMg5AthS2jqy98/sendMessage?chat_id=821323433&text=${[
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

    setActive(false)
  }

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  return (
  ReactDOM.createPortal(
      <>
          { active && <Wrapper onClick={() => setActive(false)}>

            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <Close onClick={() => setActive(false)}>&times;</Close>

      <Text string={"Залишіть заявку нашому менеджеру і ми Вам передзвонимо"} textColor={"black"}/>


      <div>
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
      <InputMask mask={"+380(99)-999-99-99"} placeholder={'+380(00)-000-00-00'} value={phone} onChange={e => setPhone(e.target.value)}/>
      </div>
      <button onClick={handleSubmit(onSubmit)}> Відправити заявку </button>
       </ModalContainer>
    </Wrapper>}</>, document.getElementById('portal'))
);
}
