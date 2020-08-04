import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Importar componentes 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import Error from './components/Error';

class Router extends Component {

    render() {

        return (

            <BrowserRouter>

                <Header />

                {/* Configurar Rutas y Paginas */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />

                    <Route exact path="/country/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            let search = props.match.params.search;
                            return (
                                <Redirect to={'/country/' + search} />
                            );
                        }
                    } />

                    <Route component={Error} />

                </Switch>

                <div className="clearfix"></div>

                <Footer />

            </BrowserRouter>


        );
    }
}

export default Router;
