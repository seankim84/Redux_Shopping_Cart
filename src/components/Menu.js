import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => <nav>
    <div>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/single">Single</NavLink></li>
            <li><NavLink to="/photogrid">PhotoGrid</NavLink></li>
        </ul>
    </div>
</nav>


export default Menu;