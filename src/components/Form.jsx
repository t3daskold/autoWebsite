import {ToastContainer, toast} from "react-toastify";
import React, {useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';

export default function Form() {
  const [phone,setPhone] = useState('');

  function onSubmit(data) {
    toast.dark(
      "Ваша заявка отправлена!\nОжидайте звонка от нашего менеджера.",
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

  return (
    <form
      method="POST"
      action={`https://api.telegram.org/bot${process.env.REACT_BOT_API_KEY}/sendMessage?chat_id=${process.env.REACT_CHAT_ID_KEY}&text=asd`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 style={{fontSize: "19px", paddingBottom: "10px"}}>
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
        placeholder="Имя"
      />

      <div style={{color: "red"}}>
        <p>{errors?.name?.message}</p>
      </div>
      <InputMask mask={"+38(999)-999-99-99"} placeholder={'+38(000)-000-00-00'} value={phone} onChange={e => setPhone(e.target.value)}/>
      </div>


      <button type="submit"> Відправити заявку </button>
      <ToastContainer style={{color: "black"}} />
    </form>
  );
}
