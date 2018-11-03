import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div>
        <ul>
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/single">Single</Link></li>
            <li><Link to="/photogrid">PhotoGrid</Link></li>
        </ul>
    </div>
)

export default Menu;