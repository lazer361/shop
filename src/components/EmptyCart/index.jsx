import React from 'react';
import { Link } from "react-router-dom";
import mainLogo from'../../assets/img/empty-cart.png';
import styles from './EmptyCart.scss';

function EmptyCart() {

    return(
        <div className='empty'>
            <img src={mainLogo} alt="Empty cart"></img>
            <h2>Корзина пуста</h2>
            <Link to="/" className='button empty_btn'>Быстрее за Пиццей !!!</Link>
        </div>
        
    );
}
export default EmptyCart;
