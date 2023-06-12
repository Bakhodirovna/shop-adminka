import styles from "./adress.scss"
import React from 'react';

const Adress = () => {
    return (
        <div className="container">
            <div className="adress">
                <div className="adress__top">

                </div>
                <div className="adress__box">
                    <h2 className="adress__title">Manzil</h2>
                    <div className="adress__contact">
                        <h3 className="adress__contact__title">Kontakt</h3>
                        <div className="adress__contact__info">
                            <div className="adress__contact__info__box">
                                <label className="adress__contact__info__label" htmlFor="">
                                    Tel nomer
                                    <input className="adress__contact__info__input" placeholder="Tel nomer" type="tel" />
                                </label>
                                <p className="txt">Tel nomer</p>
                                <p className="txt1">+998 99 999 99 99</p>
                            </div>
                            <div className="adress__contact__info__box">
                                <label className="adress__contact__info__label" htmlFor="">
                                    Email
                                    <input className="adress__contact__info__input" placeholder="Email" type="email" />
                                </label>
                                <p className="txt">Email</p>
                                <p className="txt1">Exsample@gmail.com</p>
                            </div>
                            <div className="adress__contact__info__box">
                                <label className="adress__contact__info__label" htmlFor="">
                                    Manzil
                                    <input className="adress__contact__info__input" placeholder="Manzil" type="text" />
                                </label>
                                <p className="txt">Manzil</p>
                                <p className="txt1">Toshkent shaxri, Yunusobot</p>
                            </div>
                           <div className="adress__contact__info__box">
                                <label className="adress__contact__info__label" htmlFor="">
                                    Web sayt
                                    <input className="adress__contact__info__input" placeholder="Web sayt" type="url" />
                                </label>
                                <p className="txt ">Web sayt</p>
                                <p className="txt1">www.Otto.uz</p>
                           </div>
                        </div>
                    </div>
                    <div className="adress__social">
                        <h3 className="adress__social__title">Ijtimiy tarmoqlar</h3>
                        <div className="adress__social__info">
                            <div className="adress__social__info__box">
                                <label htmlFor="" className="adress__social__info__label">
                                    Telegram
                                    <input placeholder="Telegram" type="text" className="adress__social__info__input" />
                                </label>
                                <p className="txt">Telegram</p>
                                <p className="txt1">@otto</p>                                
                            </div>
                            <div className="adress__social__info__box">
                                <label htmlFor="" className="adress__social__info__label">
                                    Instagram
                                    <input placeholder="Instagram" type="text" className="adress__social__info__input" />
                                </label>
                                <p className="txt">Instagram</p>
                                <p className="txt1">@otto</p>
                            </div>
                            <div className="adress__social__info__box">
                                <label htmlFor="" className="adress__social__info__label">
                                    Facebook
                                    <input placeholder="Facebook" type="text" className="adress__social__info__input" />
                                </label>
                                <p className="txt">Facebook</p>
                                <p className="txt1">@otto</p>
                            </div>
                            <div className="adress__social__info__box">
                                <label htmlFor="" className="adress__social__info__label">
                                    Twitter
                                    <input placeholder="Twitter" type="text" className="adress__social__info__input" />
                                </label>
                                <p className="txt">Twitter</p>
                                <p className="txt1">@otto</p>
                            </div>
                        </div>
                    </div>
                    <button className="adress__btn">
                         Qo'shish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Adress;
