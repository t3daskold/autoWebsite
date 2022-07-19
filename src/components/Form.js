import {ToastContainer, toast} from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {useForm, Controller} from "react-hook-form";

import {MaskedInput, createDefaultMaskGenerator} from "react-hook-mask";
export default function Form() {
  const maskGenerator = createDefaultMaskGenerator("+38(999) 999 99 99");

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
        `Новая Заявка! \n Имя:${data.name},\n Номер:${data.phoneNumber}`,
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
    control,
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
        Оставьте заявку нашему менеджеру и мы Вам перезвоним
      </h2>
      <input
        style={{width: "200px"}}
        {...register("name", {
          required: true,
          maxLength: {
            value: 20,
            message: "Максимальное количество символов 20",
          },
          minLength: {
            value: 1,
            message: "Пожалуйста, введдите свое имя",
          },
        })}
        pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{1,20}"
        placeholder="Имя"
      />

      <div style={{color: "red"}}>
        <p>{errors?.name?.message}</p>
      </div>
      <div>
        <Controller
          control={control}
          name="phoneNumber"
          defaultValue={""}
          rules={{
            required: true,
            minLength: {
              value: 10,
              message: "Пожалуйста введите корректный номер телефона",
            },
          }}
          render={({field}) => (
            <MaskedInput
              {...field}
              name="phoneNumber"
              style={{width: 200}}
              maskGenerator={maskGenerator}
              placeholder={"+38(xxx) xxx xx xx"}
            ></MaskedInput>
          )}
        ></Controller>
        <div style={{color: "red"}}>
          <p>{errors?.phoneNumber?.message}</p>
        </div>
      </div>

      <button type="submit"> Отправить заявку </button>
      <ToastContainer style={{color: "black"}} />
    </form>
  );
}
