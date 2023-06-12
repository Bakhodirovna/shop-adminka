import styles from './category.scss'
import React from 'react';
import vector from '../img/Vector.svg';

const Category = () => {
    return (
    <div className='container'>
        <div className='top'>

        </div>

        <div className='category'>
            <h2 className='category__title'>
                Kategoriya
            </h2>
            <label className='category__photo__label' htmlFor="">
                {/* <img src={pen} alt="" /> */}
                <input className='category__photo' type="file" />
            </label>

            <div className="category__form">
                <label htmlFor="" className="category__form__label">
                Kategoriya
                    <input placeholder='Kategoriya' type="text" className="category__form__input" />
                </label>
                <label htmlFor="" className="category__form__label">Категория
                    <input placeholder='Категория' type="text" className="category__form__input" />
                </label>
                <label htmlFor="" className="category__form__label">Category
                    <input placeholder='Category' type="text" className="category__form__input" />
                </label>
            </div>
            <button className="category__btn">
            Qo'shish
            </button>
            <span className="category__line"></span>
            <div className="category__view">
                <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
                 <div className='category__view__box'>
                        <button className='category__view__btn'>
                            <img src={vector} alt="" />
                        </button>
                        <input placeholder='Kategoriya'  type="text" className="category__view__input" disabled/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Category;
