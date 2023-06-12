import styles from './banner.scss'
import React from 'react';
import {NavLink} from 'react-router-dom'

const Banner_ru = () => {
    return (
    <div className='container'>
        <div className='top'>

        </div>
        <div className='banner' >
            <h2 className="banner__title">
                Баннеры
            </h2>
            <div className="banner__rout">
                <NavLink className="banner__rout__link" to='/banner'>1</NavLink>
                <NavLink className="banner__rout__link ru" to='/ru'>2</NavLink>
                <NavLink className="banner__rout__link" to='/eng'>3</NavLink>
            </div>
            <label className='banner__main' htmlFor="">Главный баннер
                <input className='banner__main__input' type="file" name="" id="" />
            </label>
            <label className='banner__advert__label' htmlFor="" for='advert'>Рекламный баннер</label>
            <div className='banner__advert'>
                <input id='advert' className='banner__advert__input' type="file" />
                <input id='advert' className='banner__advert__input' type="file" />
            </div>
            <div className='banner__advert__info'>
                <label className='banner__advert__info__label' htmlFor="">Категория
                    <input className='banner__advert__info__input' placeholder='Категория' type="" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Название товара 
                    <input className='banner__advert__info__input' placeholder='Название товара ' type="text" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Категория
                    <input className='banner__advert__info__input' placeholder='Категория' type="text" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Название товара 
                    <input className='banner__advert__info__input' placeholder='Название товара ' type="text" />
                </label>                
            </div>
            <span className='banner__line'></span>
            <div className='banner__view'>
                <img className='banner__view__img__main' src="" alt="" />
                <img className='banner__view__img' src="" alt="" />
                <img className='banner__view__img' src="" alt="" />
            </div>
        </div>

    </div>
    );
}

export default Banner_ru;
