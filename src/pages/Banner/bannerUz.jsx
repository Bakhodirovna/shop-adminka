import styles from './banner.scss'
import React from 'react';
import {NavLink} from 'react-router-dom'


const Banner_uz = () => {
    return (
    <div className='container'>
        <div className='top'>

        </div>
        <div className='banner' >
            <h2 className="banner__title">
                Bannerlar
            </h2>
            <div className="banner__rout">
                <NavLink className="banner__rout__link uz" to='/uz'>1</NavLink>
                <NavLink className="banner__rout__link" to='/ru'>2</NavLink>
                <NavLink className="banner__rout__link" to='eng'>3</NavLink>
            </div>
            <label className='banner__main' htmlFor="">Asosiy banner
                <input className='banner__main__input' type="file" name="" id="" />
            </label>
            <label className='banner__advert__label' htmlFor="" for='advert'>Reklama banner</label>
            <div className='banner__advert'>
                <input id='advert' className='banner__advert__input' type="file" />
                <input id='advert' className='banner__advert__input' type="file" />
            </div>
            <div className='banner__advert__info'>
                <label className='banner__advert__info__label' htmlFor="">Kategoriya
                    <input className='banner__advert__info__input' placeholder='Kategoriya' type="" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Mahsulot nomi
                    <input className='banner__advert__info__input' placeholder='Mahsulot nomi' type="text" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Kategoriya
                    <input className='banner__advert__info__input' placeholder='Kategoriya' type="text" />
                </label>
                <label className='banner__advert__info__label' htmlFor="">Mahsulot nomi
                    <input className='banner__advert__info__input' placeholder='Mahsulot nomi' type="text" />
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

export default Banner_uz;
