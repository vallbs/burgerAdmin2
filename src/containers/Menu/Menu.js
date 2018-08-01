import React from 'react';
import './Menu.css';

const menu = (props) => {
    return (
        <div>
            {/* <i className="fas fa-bars"></i> */}
            <div className="Menu">
                <ul className="MenuContainer">
                    <li className="MenuItem Active"><a href="/burgers">Бургери</a></li>
                    <li className="MenuItem"><a href="/ingredients">Інгредієнти</a></li>
                </ul>
            </div>
        </div>
    );
}

export default menu;