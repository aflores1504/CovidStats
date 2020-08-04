import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false

    };

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages : {
                required : 'Este campo es requerido.',
                alpha_num_dash_space : 'Sólo se permiten letras, guión y espacios en blanco.'
            }
        });
      
    }

    changeState = () => {
        this.setState({
            search: this.searchRef.current.value
        });
    }

    redirectToSearch = (e) => {
        e.preventDefault();
        this.changeState();

        if (this.validator.allValid()){
            this.setState({
                search: this.searchRef.current.value,
                redirect: true
            });
        } else {
            this.setState({                
                redirect: false
            });
            this.validator.showMessages();
            this.forceUpdate();
        }
        
    }

    render() {

        if (this.state.redirect) {
            return (
                <Redirect to={'/redirect/' + this.state.search} />
            );
        }

        return (
            <aside id="sidebar">
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra datos por país</p>
                    <form onSubmit={this.redirectToSearch}>
                        <div className="form-group">
                            <input type="text" name="search" ref={this.searchRef} onChange={this.changeState} />
                            {this.validator.message('search', this.state.search, 'required|alpha_num_dash_space')}
                        </div>
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>

                </div>
            </aside>
        );
    }
}

export default Sidebar;