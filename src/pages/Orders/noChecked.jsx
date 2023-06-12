import styles from './orders.scss'
import React from 'react';
import {NavLink} from 'react-router-dom'
import soat from '../img/soat.png'
import time from '../img/time.png'

const Nochecked = () => {
    return (
    <div className='container'>
        <div className='top'>

        </div>
        <div className="order">
        <NavLink to='/orders' className="order__title">Buyurtmalar</NavLink>
            <div className="order__rout">
                <NavLink className='order__rout__link nocheck__link' to='/noCheck'>Tekshirilmaganlar</NavLink>
                <NavLink className='order__rout__link ' to='/checked' >Tekshirilganlar</NavLink>
            </div>
            <div className='order__box'>
                <img src={soat} alt="" className="order__box__img" />
                <div className="order__infos">
                    <div className="order__infos__top">
                        <h2 className="order__infos__top__title">Qo’l soati</h2>
                        <p className='order__infos__top__time'>
                            <img src={time} alt="" />
                            20.12.2022
                        </p>
                    </div>
                    <div className='order__additional__info'>
                        <p className='order__additional__info__1'>
                            <span>Brand nomi:</span>
                            UNITY
                        </p>  
                        <p className='order__additional__info__2'> 
                            <span>Turi:</span>
                            Qo’l soati
                        </p>
                        <p className='order__additional__info__3'>
                            <span>Rangi:</span>
                            Qora
                        </p>  
                    </div>
                    <p className='order__infos__desc'>
                        <span>
                            Qo’shimcha ma’lumot:
                        </span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, soati
                    </p>
                    <p className='order__additional__product'>
                        <span>Qo’shimcha mahsulot:</span>
                        Ruchka, Quti
                    </p>
                    <div className='order__infos__bottom' >
                        <p className='order__infos__bottom__1'>
                            <span>Ismi:</span>
                            Temur
                        </p>  
                        <p className='order__infos__bottom__2'>
                            <span>Familiya:</span>
                            Jorarev
                        </p>
                        <p className='order__infos__bottom__3'>
                            <span>Telefon raqam:</span>
                            +998 99 999 99 99
                        </p>  
                        <button className='order__infos__btn'>Tekshirilmadi</button>                    
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default Nochecked;
