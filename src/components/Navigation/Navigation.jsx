import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Navigation.styles.css';

const Navigation = () => {
    return (
        <nav>
            <div className="nav__wrapper">
                <div className="left">
                    <Link to="/">Ecom Express</Link>
                </div>

                <ul className="right">
                    <li className="shopping_cart">
                        <BiShoppingBag />
                        <span className="cart_count">0</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
