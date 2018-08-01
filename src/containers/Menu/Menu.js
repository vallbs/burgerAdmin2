import React from 'react';

const menu = (props) => {
    return (
        <div>
            <i className="fas fa-bars"></i>
            <div>
                <ul>
                    <li><a href="/burgers">Бургери</a></li>
                    <li><a href="/ingredients">Інгредієнти</a></li>
                </ul>
            </div>
        </div>
    );
}

export default menu;