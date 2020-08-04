import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Importar componentes 
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './components/Home';

class Router extends Component {

    render() {
        
        return (

            <BrowserRouter>

                <Header />

                {/* Configurar Rutas y Paginas */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />

                </Switch>

                <div className="clearfix"></div>

                <Footer />

            </BrowserRouter>


        );
    }
}

export default Router;
