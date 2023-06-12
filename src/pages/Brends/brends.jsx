import styles from './brends.scss'
import React from 'react';
import pen from '../img/pen.png'

const Brends = () => {
    return (
    <div className='container'>
        <div className='top'>

        </div>
        <div className="brends">
            <h2 className="brends__title">
                Hamkor brendlar
            </h2>

            <label className='brends__label' htmlFor="">
                {/* <img src={pen} alt="" /> */}
                <p>Logo</p>
                <input className='brends__photo' type="file" />
            </label>
            <button className="brends__btn">
                Qo`shish
            </button>
            <span className="brends__line">

            </span>
            <div className='brends__img__box'>
                <p>Logo</p>
                {/* <img className='brends__img' src={pen} alt="" /> */}
            </div>
        </div>
    </div>
    );
}

export default Brends;
