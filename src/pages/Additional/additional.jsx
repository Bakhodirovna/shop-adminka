import styles from './additional.scss'
import React from 'react';
import img1 from '../img/pen.png'
import btn from '../img/btn.png'

const Additional = () => {
    return (
        <div className='container'>
            <div className='top'>

            </div>

            <div className="additional">
                <h2 className="additional__title">
                    Qo`shimchalar
                </h2>
                <label htmlFor="" className="additional__label">
                     Brand nomi
                    <input type="text" placeholder='Brand nomi' className="additional__input" />
                </label>
                <label className='additional__photo__label' htmlFor="">
                    {/* <img src={pen} alt="" /> */}
                    <input className='additional__photo' type="file" />
                </label>
                <div className="additional__form">
                    
                    <label htmlFor="" className="additional__form__label">Mahsulot nomi
                        <input placeholder='Mahsulot nomi' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Название товара 
                        <input placeholder='Название товара ' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Product Name
                        <input placeholder='Product Name' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Rangi
                        <input placeholder='Rangi' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Цвет
                        <input placeholder='Цвет' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Color
                        <input placeholder='Color' type="text" className="additional__form__input" />
                    </label>
                    <label htmlFor="" className="additional__form__label">Izoh koldirish
                        <textarea placeholder='Izoh koldirish' className='additional__form__input' name="" id="" cols="30" rows="8"></textarea>
                    </label>
                    <label htmlFor="" className="additional__form__label">Оставить комментарий
                        <textarea placeholder='Оставить комментарий' className='additional__form__input' name="" id="" cols="30" rows="8"></textarea>
                    </label>
                    <label htmlFor="" className="additional__form__label">Leave a comment
                        <textarea placeholder='Leave a comment' className='additional__form__input' name="" id="" cols="30" rows="8"></textarea>
                    </label>
                </div>
                <button className='additional__btn'>Qo`shish</button>

                <div className='additional__product'>
                    <div className='additional__product__top'>
                        <img className='additional__product__img' src={img1} alt="" />
                        <h3 className='additional__product__title'>
                            Ruchka
                        </h3>
                        <button className='additional__product__btn'>
                            <img src={btn} alt="" />
                        </button>
                    </div>
                    <div className='additional__product__bottom'>
                        <p className='additional__product__name'>
                            <span>Brand nomi:</span>
                            Pen
                        </p>
                        <p className='additional__product__color'>
                            <span>Rangi:</span>
                            Qora
                        </p>
                        <p className='additional__product__desc'>
                            <span>Qo’shimcha ma’lumot:</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, soati
                        </p>
                    </div>
                </div>

                <div className='additional__product'>
                    <div className='additional__product__top'>
                        <img className='additional__product__img' src={img1} alt="" />
                        <h3 className='additional__product__title'>
                            Ruchka
                        </h3>
                        <button className='additional__product__btn'>
                            <img src={btn} alt="" />
                        </button>
                    </div>
                    <div className='additional__product__bottom'>
                        <p className='additional__product__name'>
                            <span>Brand nomi:</span>
                            Pen
                        </p>
                        <p className='additional__product__color'>
                            <span>Rangi:</span>
                            Qora
                        </p>
                        <p className='additional__product__desc'>
                            <span>Qo’shimcha ma’lumot:</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, soati
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Additional;
