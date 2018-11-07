import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Single, CartPage } from './components/pages';
import Menu from './components/Menu';

class App extends Component {
    render(){
        return(
            <div>
                <Menu />
                <Route exact path="/" component={Main} />
                <Route path="/single" component={Single} />
                <Route path="/cart" component={CartPage}/>
            </div>
        )
    }
};

export default App;