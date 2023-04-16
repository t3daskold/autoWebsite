import Header from './header/Header'
import Footer from "./footer/Footer";
import {Outlet} from "react-router-dom";
import Modal from "./form/Form";
import React, {useState} from "react";
import {ToastContainer} from "react-toastify";

const Layout = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Header setActive={() => setModalActive(true)}/>
                 <Modal active={modalActive} setActive={setModalActive} />
            <ToastContainer style={{color: "black"}} />

            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout