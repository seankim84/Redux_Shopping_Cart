import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => <nav>
    <div>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/single">Single</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
    </div>
</nav>


export default Menu;