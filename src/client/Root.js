import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import Store from '../config/store';

const Root = () => (
        <BrowserRouter>
        <Provider store={Store}>
            <App />
            </Provider>
        </BrowserRouter>
    
);

export default Root;
